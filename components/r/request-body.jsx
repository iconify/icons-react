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

.ktvep6pgg {
  d: path("M4 10v9a2.5 2.5 0 0 0 2.5 2.5h11A2.5 2.5 0 0 0 20 19v-9");
}

.rp4oqibyb {
  d: path("M10.25 10.25L13 13l2.75-2.75M8.5 17.5h8");
}

.tufj21bif {
  d: path("M3 4.5h6a4 4 0 0 1 4 4V13");
}
</style><g class="hntgybcog"><path class="ktvep6pgg"/><path class="tufj21bif"/><path class="rp4oqibyb"/></g>`,
		"fallback": "uix:request-body",
	});
}

export default Component;
