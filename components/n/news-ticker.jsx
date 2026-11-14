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

.iqf9kpw_m {
  d: path("M6.875 6.5h10.25a4.375 4.375 0 0 1 4.375 4.375v2.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 13.125v-2.25A4.375 4.375 0 0 1 6.875 6.5M5.5 12h4");
}

.n4rqmccip {
  d: path("M12.5 9.5L15 12l-2.5 2.5m3.5-5l2.5 2.5l-2.5 2.5");
}
</style><g class="hntgybcog"><path class="iqf9kpw_m"/><path class="n4rqmccip"/></g>`,
		"fallback": "uix:news-ticker",
	});
}

export default Component;
