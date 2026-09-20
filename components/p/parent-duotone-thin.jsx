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
		"content": `<style>.aiuhe2bla {
  d: path("M3.5 15a4.5 4.5 0 0 1 9 0");
}

.bstg2h-sl {
  fill: currentColor;
  d: path("M5 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.olmwgycdy {
  d: path("M15 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s9hkttyai {
  d: path("M14 18a3 3 0 0 1 6 0");
}

.t_m3g48-w {
  d: path("M5 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.unova7b3b {
  fill: currentColor;
  d: path("M15 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="bstg2h-sl"/><path class="unova7b3b"/><path class="t_m3g48-w"/><path class="aiuhe2bla"/><path class="olmwgycdy"/><path class="s9hkttyai"/></g>`,
		"fallback": "iconmind:parent-duotone-thin",
	});
}

export default Component;
