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

.j4-rq4_nn {
  fill: currentColor;
  d: path("m10.5 9 3 3 -3 3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nnzlfsekh {
  d: path("M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.r0-aom3qb {
  fill: currentColor;
  d: path("M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.t9au-qbei {
  d: path("m10.5 9 3 3 -3 3Z");
}

.teszqoqtj {
  d: path("M5.5 10.5v3");
}

.zqsgc7abe {
  d: path("M18.5 10.5v3");
}
</style><g class="hntgybcog"><path class="r0-aom3qb"/><path class="j4-rq4_nn"/><path class="nnzlfsekh"/><path class="teszqoqtj"/><path class="zqsgc7abe"/><path class="t9au-qbei"/></g>`,
		"fallback": "iconmind:pay-to-run-duotone-thin",
	});
}

export default Component;
