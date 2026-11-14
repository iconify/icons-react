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
		"content": `<style>.cetoqjbkf {
  d: path("M4 5.75V5a2.5 2.5 0 0 1 2.5-2.5h.75m9.5 0h.75A2.5 2.5 0 0 1 20 5v.75m0 12.5V19a2.5 2.5 0 0 1-2.5 2.5h-.75m-9.5 0H6.5A2.5 2.5 0 0 1 4 19v-.75M10.5 2.5h3m-3 19h3M4 9.25v5.5m16-5.5v5.5M9 6v12m4-2a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s9les-b-f {
  d: path("M15 14v-4a2.5 2.5 0 0 0-2.5-2.5H12");
}

.sqynocblz {
  d: path("M13.5 6L12 7.5L13.5 9");
}
</style><g class="hntgybcog"><path class="cetoqjbkf"/><path class="s9les-b-f"/><path class="sqynocblz"/></g>`,
		"fallback": "uix:pull-request-draft",
	});
}

export default Component;
