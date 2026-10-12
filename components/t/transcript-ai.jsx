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
		"content": `<style>.g6ctus9qt {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.we3ta1yhv {
  d: path("M7 7.5h1.5M7 12h1.5M7 16.5h1.5m2.5-9h6M11 12h6m-6 4.5h4");
}
</style><g class="hntgybcog"><rect class="g6ctus9qt"/><path class="we3ta1yhv"/></g>`,
		"fallback": "iconoven:transcript-ai",
	});
}

export default Component;
