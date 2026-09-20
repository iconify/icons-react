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
		"content": `<style>.iqr3ry8kv {
  d: path("M3 19v-4h5l4 -4h4l4 4v4Z");
}

.o63zcjbok {
  d: path("M6 8V2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sryr5qb0a {
  d: path("M6 2h5v4H6");
}
</style><g class="s0phu2bbs"><path class="iqr3ry8kv"/><path class="o63zcjbok"/><path class="sryr5qb0a"/></g>`,
		"fallback": "iconmind:step-goal-outline-bold",
	});
}

export default Component;
