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
		"content": `<style>.hedj3bbrm {
  cx: 13px;
  cy: 9px;
  r: 1px;
  fill: currentColor;
}

.qrg2dha4d {
  fill: currentColor;
  d: path("M18 7V4h2V2H4v20h16v-2h-4.03A4.97 4.97 0 0 0 18 16v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v3z");
}
</style><path class="qrg2dha4d"/><circle class="hedj3bbrm"/>`,
		"fallback": "ic:sharp-coffee-maker",
	});
}

export default Component;
