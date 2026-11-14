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
		"content": `<style>.c8hgwwb_j {
  d: path("M12 8.25za1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 1.5-1.5m-1.5 7.25l3 1m4-7.25l2-.75m-2 4.25l2-.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tvxzvze-f {
  d: path("m2.5 5.5l6-2.5l7 2.5l6-2.5v15.5l-6 2.5l-7-2.5l-6 2.5Zm6-2.5v15.5m7-13V21M4.5 9.25l2-.75m-2 4.25l2-.75");
}
</style><g class="hntgybcog"><path class="tvxzvze-f"/><path class="c8hgwwb_j"/></g>`,
		"fallback": "uix:promo-leaflet",
	});
}

export default Component;
