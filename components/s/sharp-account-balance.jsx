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
		"content": `<style>.zv_m01c0a {
  fill: currentColor;
  d: path("M4 10v7h3v-7zm6 0v7h3v-7zM2 22h19v-3H2zm14-12v7h3v-7zm-4.5-9L2 6v2h19V6z");
}
</style><path class="zv_m01c0a"/>`,
		"fallback": "ic:sharp-account-balance",
	});
}

export default Component;
