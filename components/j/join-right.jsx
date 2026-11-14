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

.k31ioubfu {
  fill: currentColor;
  d: path("M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7-2.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}

.sos3x00pq {
  d: path("M2 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}

.tmzo-kb_u {
  d: path("M10 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}
</style><g class="hntgybcog"><path class="sos3x00pq"/><path class="tmzo-kb_u"/><path class="k31ioubfu"/></g>`,
		"fallback": "uix:join-right",
	});
}

export default Component;
