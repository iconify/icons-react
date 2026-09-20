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
		"content": `<style>.c6ge0ib5p {
  d: path("M15 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.gz41zzbvi {
  fill: currentColor;
  d: path("M15 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.h_ahrlbwq {
  d: path("M2 10a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mib53vg6y {
  fill: currentColor;
  d: path("M2 10a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ywd80sbef {
  d: path("M5 13.5 7.5 11l2.5 2.5 2.5 -2.5");
}
</style><g class="hntgybcog"><path class="mib53vg6y"/><path class="gz41zzbvi"/><path class="h_ahrlbwq"/><path class="c6ge0ib5p"/><path class="ywd80sbef"/></g>`,
		"fallback": "iconmind:ticker-duotone-thin",
	});
}

export default Component;
