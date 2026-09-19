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
		"content": `<style>.hch983t8a {
  fill: currentColor;
  d: path("M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z");
}
</style><path class="hch983t8a"/>`,
		"fallback": "ic:twotone-menu",
	});
}

export default Component;
