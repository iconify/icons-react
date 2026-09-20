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
		"content": `<style>.brz3--krt {
  d: path("m15 14 4 4");
}

.f8208jb9b {
  d: path("M9 8v6h6V8Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k187sabpz {
  d: path("M2 11h20");
}

.mhk3euagx {
  d: path("m9 14 -4 4");
}
</style><g class="hntgybcog"><path class="k187sabpz"/><path class="f8208jb9b"/><path class="mhk3euagx"/><path class="brz3--krt"/></g>`,
		"fallback": "iconmind:martial-arts-outline-thin",
	});
}

export default Component;
