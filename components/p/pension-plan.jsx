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

.yebiqp2zx {
  d: path("m4.5 3l2 10m0 0h7.6m-6.6 0L7 18.5m-4.5-1c2.212 1.58 5.422 2.361 8.873 1.965M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="yebiqp2zx"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix:pension-plan",
	});
}

export default Component;
