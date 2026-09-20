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

.kamdbib6v {
  d: path("M2 7h20");
}

.uduptbc9i {
  d: path("m13 20 2 2");
}

.w1z4wnfys {
  d: path("M2 4a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.wlpqxdb6z {
  d: path("M8 18a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="w1z4wnfys"/><path class="kamdbib6v"/><path class="wlpqxdb6z"/><path class="uduptbc9i"/></g>`,
		"fallback": "iconmind:table-scan-outline-thin",
	});
}

export default Component;
