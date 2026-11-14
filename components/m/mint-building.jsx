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

.shvl-m_xw {
  d: path("m7.25 6l4.051-2.132a1.5 1.5 0 0 1 1.398 0L16.75 6a1.326 1.326 0 0 1-.618 2.5H7.868A1.326 1.326 0 0 1 7.25 6M4.5 11.25V18M8 11.25V18m3.5-6.75v5M2.5 21H12m2-3a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="shvl-m_xw"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix:mint-building",
	});
}

export default Component;
