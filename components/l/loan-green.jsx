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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.oh_jh3b1r {
  d: path("M11.208 18.597c-1.997.731-4.26 1.039-6.708.903C4 10.5 9.5 4 20 4c0 3.203-.605 5.941-1.701 8.185M3 21l10.5-10.5M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="oh_jh3b1r"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix:loan-green",
	});
}

export default Component;
