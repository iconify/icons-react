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
		"content": `<style>.gllpxrb_n {
  d: path("M5 9v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9m-9.75 9l5.5-6.25m-5 1h.01M14.25 17h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l087an1gy {
  d: path("M2.5 11L12 3l9.5 8");
}
</style><g class="hntgybcog"><path class="l087an1gy"/><path class="gllpxrb_n"/></g>`,
		"fallback": "uix:tax-house",
	});
}

export default Component;
