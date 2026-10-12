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

.swr0-e-ae {
  d: path("M8.5 7.4a7.07 7.07 0 1 0 4 0");
}

.tqj54lblp {
  d: path("M9.25 4.5h2.5q.5 0 .83.38l.84.99q.33.38-.04.72l-2.51 2.32q-.37.34-.74 0L7.62 6.59q-.37-.34-.04-.72l.84-.99q.33-.38.83-.38M19 2.75q.27 1.98 2.25 2.25q-1.98.27-2.25 2.25q-.27-1.98-2.25-2.25q1.98-.27 2.25-2.25");
}
</style><g class="hntgybcog"><path class="swr0-e-ae"/><path class="tqj54lblp"/></g>`,
		"fallback": "iconoven:magic-ring",
	});
}

export default Component;
