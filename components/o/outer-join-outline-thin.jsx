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
		"content": `<style>.c4ksau0lb {
  d: path("M14 3h5");
}

.d8vl7nsmr {
  d: path("M2 12a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0 -11 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kywmzznkm {
  d: path("M11 12a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0 -11 0");
}

.pjw5o-b4z {
  d: path("M5 3h5");
}
</style><g class="hntgybcog"><path class="d8vl7nsmr"/><path class="kywmzznkm"/><path class="pjw5o-b4z"/><path class="c4ksau0lb"/></g>`,
		"fallback": "iconmind:outer-join-outline-thin",
	});
}

export default Component;
