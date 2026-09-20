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
		"content": `<style>.hc491gbyo {
  d: path("M5 10v10h14V10");
}

.oa34-acln {
  d: path("M3 6v4h18V6Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x6_f3nb7s {
  d: path("M10 14h4v3h-4Z");
}
</style><g class="s0phu2bbs"><path class="oa34-acln"/><path class="hc491gbyo"/><path class="x6_f3nb7s"/></g>`,
		"fallback": "iconmind:storage-box-outline-bold",
	});
}

export default Component;
