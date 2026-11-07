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
		"content": `<style>.rr7om0j3g {
  fill: currentColor;
  d: path("m3.707 1.293l19 19a.999.999 0 1 1-1.414 1.414l-2.643-2.642A9 9 0 1 1 5.935 6.35L2.293 2.707a.999.999 0 1 1 1.414-1.414m15.257 12.428L9.573 4.33A9 9 0 0 1 11 4.054V4h-1a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2h-1v.054a9 9 0 0 1 4.618 1.913l1.675-1.674a.999.999 0 1 1 1.414 1.414l-1.674 1.675a9 9 0 0 1 1.637 8.045Z");
}
</style><path class="rr7om0j3g"/>`,
		"fallback": "coolicons:timer-off-fill-round",
	});
}

export default Component;
