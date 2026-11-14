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

.ypi94pblh {
  d: path("M5.25 17.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.394.211l.106-.211a1.118 1.118 0 0 1 2 0l.106.211a1.236 1.236 0 0 1-1.106 1.789a1.236 1.236 0 0 1-1.106-1.789M9.75 11L12 5.75L14.25 11m-3.5-2h2.5");
}

.z9-6ucapc {
  d: path("M4.25 13h6A1.75 1.75 0 0 1 12 14.75v5a1.75 1.75 0 0 1-1.75 1.75h-6a1.75 1.75 0 0 1-1.75-1.75v-5A1.75 1.75 0 0 1 4.25 13m9.5 0h6a1.75 1.75 0 0 1 1.75 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-6A1.75 1.75 0 0 1 12 19.75v-5A1.75 1.75 0 0 1 13.75 13M9 3.5h6a1.75 1.75 0 0 1 1.75 1.75v6A1.75 1.75 0 0 1 15 13H9a1.75 1.75 0 0 1-1.75-1.75v-6A1.75 1.75 0 0 1 9 3.5");
}
</style><g class="hntgybcog"><path class="z9-6ucapc"/><path class="ypi94pblh"/></g>`,
		"fallback": "uix:playroom",
	});
}

export default Component;
