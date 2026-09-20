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
		"content": `<style>.f43rry3qf {
  fill: currentColor;
  d: path("M4 20v-4.5h16V20zm12.116-5.5V4H20v10.5zM4 14.5V4h3.885v10.5zm4.885 0V4h6.23v10.5z");
}
</style><path class="f43rry3qf"/>`,
		"fallback": "material-symbols-light:shelf-position-sharp",
	});
}

export default Component;
