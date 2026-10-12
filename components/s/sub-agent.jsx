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
		"content": `<style>.cwy4r1gpw {
  width: 8px;
  height: 8px;
  x: 13.25px;
  y: 13.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.25px;
}

.i8vsdgbyb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 12.75v4.5a1 1 0 0 0 1 1h3.25");
}

.ib6838b8w {
  width: 12.5px;
  height: 10px;
  x: 2.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 3px;
}

.j24_5sbhb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 7.75h.01m4.49 0h.01");
}

.l2m9qfpvx {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.75 17.25h.01m2.99 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="ib6838b8w"/><path class="j24_5sbhb"/><path class="i8vsdgbyb"/><rect class="cwy4r1gpw"/><path class="l2m9qfpvx"/></g>`,
		"fallback": "iconoven:sub-agent",
	});
}

export default Component;
