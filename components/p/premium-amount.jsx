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
		"content": `<style>.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.qbhb2ut5g {
  d: path("M6 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.r0flifetu {
  d: path("M11.247 18.747L3 10.5V3h7.5l9 9l-.192.192");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r0flifetu"/><path class="qbhb2ut5g"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:premium-amount",
	});
}

export default Component;
