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

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xchg1ibnd {
  d: path("M11.208 18.597c-1.997.731-4.26 1.039-6.708.903C4 10.5 9.5 4 20 4c0 3.203-.605 5.941-1.701 8.185M3 21l10.5-10.5M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><g class="ulnmmdpxh"><path class="xchg1ibnd"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:loan-green",
	});
}

export default Component;
