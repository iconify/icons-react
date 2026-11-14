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
		"content": `<style>.e60lm6byh {
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0M4.5 9v11.5h15V9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zp9vu_uzd {
  d: path("M11.688 11h.625a2.19 2.19 0 0 1 2.187 2.188v2.625A2.19 2.19 0 0 1 12.313 18h-.625A2.19 2.19 0 0 1 9.5 15.813v-2.625A2.19 2.19 0 0 1 11.688 11M12 15.75h.01");
}
</style><g class="hntgybcog"><path class="e60lm6byh"/><path class="zp9vu_uzd"/></g>`,
		"fallback": "uix:telecom-shop",
	});
}

export default Component;
