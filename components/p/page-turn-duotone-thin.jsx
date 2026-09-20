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

.kn-4tic2i {
  d: path("M4 21V3h10l6 6v12Z");
}

.m2iblkrmn {
  fill: currentColor;
  d: path("M4 21V3h10l6 6v12Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.t8qnl-bvo {
  d: path("M14 3v6h6");
}
</style><g class="hntgybcog"><path class="m2iblkrmn"/><path class="kn-4tic2i"/><path class="t8qnl-bvo"/></g>`,
		"fallback": "iconmind:page-turn-duotone-thin",
	});
}

export default Component;
