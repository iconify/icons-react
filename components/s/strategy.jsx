import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ay6filvvo {
  fill: currentColor;
  d: path("M13.5 21L8 17.788v-6.422l2.73-1.589v6.492h5.54V9.777L19 11.366v6.423zM6 10.846L3 9.135V5.712L6 4l3 1.712v3.423zM13 14V3h8l-1.654 2.5L21 8h-7v6z");
}
</style><path class="ay6filvvo"/>`,
		"fallback": "material-symbols-light:strategy",
	});
}

export default Component;
