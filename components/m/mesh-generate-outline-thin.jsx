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
</style><g class="hntgybcog"><path class="sf7s7wb6x"/><path class="u7m7z6ojw"/></g>`,
		"fallback": "iconmind:mesh-generate-outline-thin",
	});
}

export default Component;
