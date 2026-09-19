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

.rayy1nbpj {
  fill: currentColor;
  d: path("M18 6V4h1c.55 0 1-.45 1-1s-.45-1-1-1H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1h-3.03A4.97 4.97 0 0 0 18 16v-3c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v3c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1");
}
</style><path class="rayy1nbpj"/><circle class="hedj3bbrm"/>`,
		"fallback": "ic:round-coffee-maker",
	});
}

export default Component;
