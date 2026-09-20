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

.is1bv_axc {
  d: path("M2 6a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.kzt32ybrc {
  d: path("M5 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.tc8fh3off {
  d: path("M14 6a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.z-zcf7b5w {
  d: path("M18 7.5v3");
}
</style><g class="hntgybcog"><path class="is1bv_axc"/><path class="tc8fh3off"/><path class="kzt32ybrc"/><path class="z-zcf7b5w"/></g>`,
		"fallback": "iconmind:variant-outline-thin",
	});
}

export default Component;
