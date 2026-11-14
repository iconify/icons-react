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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ns1702rxs {
  d: path("M3.25 12A10 10 0 0 1 10 3.25");
}

.v2tmd_koh {
  d: path("M19.25 6a4.5 6 45 1 1-8.5 8.5a4.5 6 45 1 1 8.5-8.5m-8.5 8.5L5 20.25m8.5-14.5l6 6m-9-3l6 6");
}
</style><g class="hntgybcog"><path class="v2tmd_koh"/><path class="ns1702rxs"/></g>`,
		"fallback": "uix:tennis-forehand",
	});
}

export default Component;
