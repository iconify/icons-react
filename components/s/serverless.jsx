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

.jo17nzbib {
  d: path("M9.75 10.25h.75a.85.85 0 0 1 .77.5l2.68 5h.55m-2.7-3l-2.05 3");
}

.ru3i_z4nd {
  d: path("M7 18.25a4 4 0 0 1-.73-7.93a5.75 5.75 0 0 1 11.46 0a4 4 0 0 1-.73 7.93Z");
}
</style><g class="hntgybcog"><path class="ru3i_z4nd"/><path class="jo17nzbib"/></g>`,
		"fallback": "iconoven:serverless",
	});
}

export default Component;
