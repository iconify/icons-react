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
		"content": `<style>.k_2k3_b1h {
  fill: currentColor;
  d: path("M9.385 9.192h8v-2h-8zM4 20V4h16v16z");
}
</style><path class="k_2k3_b1h"/>`,
		"fallback": "material-symbols-light:position-top-right-sharp",
	});
}

export default Component;
