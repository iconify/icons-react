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
		"content": `<style>.bysp5t_fv {
  fill: currentColor;
  d: path("M9 16.616v-3.847H5.115L12 3.577l6.885 9.192H15v3.846zM5 20v-1h14v1z");
}
</style><path class="bysp5t_fv"/>`,
		"fallback": "material-symbols-light:shift-lock",
	});
}

export default Component;
