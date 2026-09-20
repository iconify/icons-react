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
		"content": `<style>.cnwtrqmag {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 21v-3.5h4V21");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dgur4c9cy {
  d: path("M14 21v-3.5h4V21");
}

.ftjlxk3sh {
  d: path("M4 21v-3.5h4V21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rw6ho_bav {
  d: path("M2 9h20");
}

.tahjarbfs {
  d: path("M2 15V5h20v10");
}

.uk1w1tchk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 15V5h20v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uly3_zloy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 21v-3.5h4V21");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x4r46rbgt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 9h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="uk1w1tchk"/><path class="x4r46rbgt"/><path class="cnwtrqmag"/><path class="uly3_zloy"/><path class="tahjarbfs"/><path class="rw6ho_bav"/><path class="ftjlxk3sh"/><path class="dgur4c9cy"/></g>`,
		"fallback": "iconmind:motel-duotone-thin",
	});
}

export default Component;
