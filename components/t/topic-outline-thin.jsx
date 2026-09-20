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

.if5ft31dv {
  d: path("M11 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.kuk8yacoy {
  d: path("M8 10a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.mdci-mi7f {
  d: path("M18 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.n8h0kccut {
  d: path("M4 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="kuk8yacoy"/><path class="n8h0kccut"/><path class="if5ft31dv"/><path class="mdci-mi7f"/></g>`,
		"fallback": "iconmind:topic-outline-thin",
	});
}

export default Component;
