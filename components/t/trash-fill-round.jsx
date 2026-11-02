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
		"content": `<style>.o8hmt80gq {
  fill: currentColor;
  d: path("M16.874 5H20a1 1 0 0 1 0 2h-1v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 14 22h-4a5 5 0 0 1-5-5V7H4a1 1 0 0 1 0-2h3.126A4.01 4.01 0 0 1 11 2h2a4.006 4.006 0 0 1 3.874 3M13 4h-2a2.01 2.01 0 0 0-1.733 1h5.466A2 2 0 0 0 13 4");
}
</style><path class="o8hmt80gq"/>`,
		"fallback": "coolicons:trash-fill-round",
	});
}

export default Component;
