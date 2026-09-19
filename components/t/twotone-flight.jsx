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
		"content": `<style>.ksse2sjxp {
  fill: currentColor;
  d: path("m10 19l-2 1.5V22l3.5-1l3.5 1v-1.5L13 19v-5.5l8 2.5v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5z");
}
</style><path class="ksse2sjxp"/>`,
		"fallback": "ic:twotone-flight",
	});
}

export default Component;
