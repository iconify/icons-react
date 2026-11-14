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
		"content": `<style>.c95x86p7n {
  d: path("M6 3h4.5v3h3V3H18v3h3v6h-3v3h-3v3h-1.5v3h-3v-3H9v-3H6v-3H3V6h3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zc5m_3bog {
  d: path("M6 9V6h3");
}
</style><g class="hntgybcog"><path class="c95x86p7n"/><path class="zc5m_3bog"/></g>`,
		"fallback": "uix:pixel-heart",
	});
}

export default Component;
