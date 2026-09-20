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

.sf7s7wb6x {
  d: path("m12 2 6 6v8l-6 6 -6 -6V8Z");
}

.u7m7z6ojw {
  d: path("M10 14a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.z1ra8bb5p {
  fill: currentColor;
  d: path("M10 14a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zp7m0nbel {
  fill: currentColor;
  d: path("m12 2 6 6v8l-6 6 -6 -6V8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="zp7m0nbel"/><path class="z1ra8bb5p"/><path class="sf7s7wb6x"/><path class="u7m7z6ojw"/></g>`,
		"fallback": "iconmind:mesh-generate-duotone-thin",
	});
}

export default Component;
