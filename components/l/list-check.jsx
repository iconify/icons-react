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
		"content": `<style>.h_0bmrksc {
  width: 4px;
  height: 4px;
  x: 2.75px;
  y: 17.25px;
  rx: 1.25px;
}

.h30h4bbeb {
  width: 4px;
  height: 4px;
  x: 2.75px;
  y: 10.25px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j9cvnk96j {
  d: path("m3.85 5.35l.8.8l1.3-1.6m-2.1 7.8l.8.8l1.3-1.6");
}

.obu495vsj {
  width: 4px;
  height: 4px;
  x: 2.75px;
  y: 3.25px;
  rx: 1.25px;
}

.t0wxw6bwo {
  d: path("M9.75 5.25h10.5m-10.5 7h10.5m-10.5 7h10.5");
}
</style><g class="hntgybcog"><path class="t0wxw6bwo"/><rect class="obu495vsj"/><rect class="h30h4bbeb"/><rect class="h_0bmrksc"/><path class="j9cvnk96j"/></g>`,
		"fallback": "iconoven:list-check",
	});
}

export default Component;
