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
		"content": `<style>.cn4r8yd4q {
  d: path("M8.5 12a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.i9l-u8avp {
  d: path("M18 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yxo79mbqo {
  d: path("M2 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zn5d9ob7n {
  d: path("M9.5 10a2.5 2.5 0 0 1 5 0");
}
</style><g class="s0phu2bbs"><path class="cn4r8yd4q"/><path class="zn5d9ob7n"/><path class="yxo79mbqo"/><path class="i9l-u8avp"/></g>`,
		"fallback": "iconmind:mutex-flow-outline-bold",
	});
}

export default Component;
