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
		"content": `<style>.c5oa-bc4m {
  d: path("M3 5v15M6.375 9.75h2.25A1.375 1.375 0 0 1 10 11.125A1.375 1.375 0 0 1 8.625 12.5h-2.25A1.375 1.375 0 0 1 5 11.125A1.375 1.375 0 0 1 6.375 9.75M3 14h8.25c.761 0 1.378.435 1.629 1.084m-1.373 2.399a2 2 0 0 1-.256.017H3m8.25 0V20m3-2c1.25-2 2.5-2.75 3.75-2.75s2.5.75 3.75 2.75c-1.25 2-2.5 2.75-3.75 2.75S15.5 20 14.25 18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jt35ztbci {
  fill: currentColor;
  d: path("M17 18a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><g class="hntgybcog"><path class="c5oa-bc4m"/><path class="jt35ztbci"/></g>`,
		"fallback": "uix:sleep-disorder",
	});
}

export default Component;
