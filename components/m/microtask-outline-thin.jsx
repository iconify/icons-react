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
		"content": `<style>.ceatt7y_b {
  d: path("M18 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j7phtvv5f {
  d: path("M4 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.r7dhdp-mq {
  d: path("M4 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.umr6jbb1c {
  d: path("M18 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.zey5ebc0a {
  d: path("M7 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}
</style><g class="hntgybcog"><path class="zey5ebc0a"/><path class="r7dhdp-mq"/><path class="umr6jbb1c"/><path class="j7phtvv5f"/><path class="ceatt7y_b"/></g>`,
		"fallback": "iconmind:microtask-outline-thin",
	});
}

export default Component;
