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
		"content": `<style>.g-g6w6buq {
  d: path("M7 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.g587irb4v {
  d: path("M7 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jd_dotbnq {
  d: path("M6 2h12a2 2 0 0 1 2 2v15l-2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V4a2 2 0 0 1 2 -2");
}

.q3s7g5q_s {
  d: path("M10.5 7H17");
}

.z3-9k3d5e {
  d: path("M10.5 11H17");
}
</style><g class="hntgybcog"><path class="jd_dotbnq"/><path class="g587irb4v"/><path class="q3s7g5q_s"/><path class="g-g6w6buq"/><path class="z3-9k3d5e"/></g>`,
		"fallback": "iconmind:usage-record-outline-thin",
	});
}

export default Component;
