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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.i1t-k5b8f {
  d: path("m9 9 3 3 -3 3Z");
}

.j7kcgusfd {
  fill: currentColor;
  d: path("m9 9 3 3 -3 3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.l1jjkky7x {
  d: path("M8 18h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="yxow7abeb"/><path class="j7kcgusfd"/><path class="abnm6smsv"/><path class="i1t-k5b8f"/><path class="l1jjkky7x"/></g>`,
		"fallback": "iconmind:test-run-duotone-bold",
	});
}

export default Component;
