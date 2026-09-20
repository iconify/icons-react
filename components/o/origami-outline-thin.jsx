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
		"content": `<style>.fq7shjbor {
  d: path("M3 14h18c-1 3 -4 6 -9 6s-8 -3 -9 -6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mzp9zz-op {
  d: path("M11 11V3l8 8Z");
}
</style><g class="hntgybcog"><path class="fq7shjbor"/><path class="mzp9zz-op"/></g>`,
		"fallback": "iconmind:origami-outline-thin",
	});
}

export default Component;
