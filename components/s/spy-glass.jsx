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

.s4m3rjbgi {
  d: path("m4.584 13.251l7.704-3.592a1.75 1.75 0 0 1 2.325.847l.423.906a1.75 1.75 0 0 1-.847 2.325L6.486 17.33a1.75 1.75 0 0 1-2.326-.847l-.422-.906a1.75 1.75 0 0 1 .846-2.326");
}

.wfgqtxb8n {
  d: path("m13.497 6.337l2.719-1.268a1.75 1.75 0 0 1 2.325.846l1.268 2.719a1.75 1.75 0 0 1-.846 2.326l-2.719 1.268a1.75 1.75 0 0 1-2.326-.847L12.65 8.662a1.75 1.75 0 0 1 .847-2.325M10.5 15L7 21.5m3.5-6.5l3.5 6.5");
}
</style><g class="hntgybcog"><path class="s4m3rjbgi"/><path class="wfgqtxb8n"/></g>`,
		"fallback": "uix:spy-glass",
	});
}

export default Component;
