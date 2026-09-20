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
		"content": `<style>.gtx4kfbor {
  fill: currentColor;
  d: path("M3 19v-4h5l4 -4h4l4 4v4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.iqr3ry8kv {
  d: path("M3 19v-4h5l4 -4h4l4 4v4Z");
}

.ndgriosbe {
  d: path("M3 6h5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u1cucg5cn {
  d: path("M3 9h3");
}
</style><g class="s0phu2bbs"><path class="gtx4kfbor"/><path class="iqr3ry8kv"/><path class="ndgriosbe"/><path class="u1cucg5cn"/></g>`,
		"fallback": "iconmind:step-count-duotone-bold",
	});
}

export default Component;
