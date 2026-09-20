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
		"content": `<style>.fu2iodbya {
  d: path("M3 16h16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r3-lax2ik {
  d: path("m8 9 4 4");
}

.w8fmvxwit {
  d: path("M3 11h14");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="hntgybcog"><path class="xgrfb-bqu"/><path class="w8fmvxwit"/><path class="r3-lax2ik"/><path class="fu2iodbya"/></g>`,
		"fallback": "iconmind:mmr-outline-thin",
	});
}

export default Component;
