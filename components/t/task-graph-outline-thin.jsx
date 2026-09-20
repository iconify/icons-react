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
		"content": `<style>.e6tys9mkg {
  d: path("m7 16 4 -4");
}

.fmr2g_bno {
  d: path("M3 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hlnl_9cae {
  d: path("M3 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.llakqobuk {
  d: path("M11 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nd30accfc {
  d: path("m7 8 4 4");
}

.nuz6-76is {
  d: path("M15 12h6");
}
</style><g class="hntgybcog"><path class="fmr2g_bno"/><path class="hlnl_9cae"/><path class="llakqobuk"/><path class="nd30accfc"/><path class="e6tys9mkg"/><path class="nuz6-76is"/></g>`,
		"fallback": "iconmind:task-graph-outline-thin",
	});
}

export default Component;
