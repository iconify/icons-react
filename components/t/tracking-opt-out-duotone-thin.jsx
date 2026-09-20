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
		"content": `<style>.bkcnp6b8w {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M22 12a12.5 12.5 0 0 1 -20 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l1y6mk20t {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m14 10 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lxtc-wp5b {
  d: path("m10 10 4 4");
}

.moha5wbmp {
  d: path("M22 12a12.5 12.5 0 0 1 -20 0");
}

.nowdsq6_v {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 12a12.5 12.5 0 0 1 20 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qhea8zb8b {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m10 10 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s-cqkabbd {
  d: path("m14 10 -4 4");
}

.yix-58bnj {
  d: path("M2 12a12.5 12.5 0 0 1 20 0");
}
</style><g class="hntgybcog"><path class="nowdsq6_v"/><path class="bkcnp6b8w"/><path class="qhea8zb8b"/><path class="l1y6mk20t"/><path class="yix-58bnj"/><path class="moha5wbmp"/><path class="lxtc-wp5b"/><path class="s-cqkabbd"/></g>`,
		"fallback": "iconmind:tracking-opt-out-duotone-thin",
	});
}

export default Component;
