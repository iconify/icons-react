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
		"content": `<style>.h0xx2obvc {
  d: path("M13 12h3");
}

.oyo-f5llb {
  d: path("M16 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v8fbd0blu {
  d: path("M7.5 6H10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V9l3 -3Z");
}
</style><g class="s0phu2bbs"><path class="v8fbd0blu"/><path class="h0xx2obvc"/><path class="oyo-f5llb"/></g>`,
		"fallback": "iconmind:mcp-websocket-outline-bold",
	});
}

export default Component;
