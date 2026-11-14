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
		"content": `<style>.grnsbbcek {
  fill: currentColor;
  d: path("M15.25 5.5h.5A1.25 1.25 0 0 1 17 6.75A1.25 1.25 0 0 1 15.75 8h-.5A1.25 1.25 0 0 1 14 6.75a1.25 1.25 0 0 1 1.25-1.25M4 13h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 6 18H4a1.5 1.5 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 4 13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s675n6bzq {
  d: path("M4.25 5h11.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H4.25A1.75 1.75 0 0 1 2.5 6.75A1.75 1.75 0 0 1 4.25 5");
}

.w4a5fbbjg {
  d: path("M11 13h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 13 18h-2a1.5 1.5 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 11 13m7 0h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 20 18h-2a1.5 1.5 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 18 13");
}
</style><g class="hntgybcog"><path class="s675n6bzq"/><path class="grnsbbcek"/><path class="w4a5fbbjg"/></g>`,
		"fallback": "uix:test-strip",
	});
}

export default Component;
