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
		"content": `<style>.tx69zfbwr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.75 14h.01m2.49 3h.01");
}

.xcws4uzia {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15 8.5L20.5 3m-3.75 9.25l4.5-4.5m-10-1l4-4");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zuot8yb_d {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.15 12.54l2.2-1.83q1.15-.96 2.63-.73l1.79.29q1.48.23 2.02 1.63l.67 1.7q.54 1.4-.16 2.73l-1.1 2.09q-.7 1.33-2.19 1.46l-2.77.24q-1.49.13-2.55-.93l-.63-.63Q3 17.5 3 16v-1q0-1.5 1.15-2.46");
}
</style><g class="y9tr6bcfx"><path class="zuot8yb_d"/><path class="tx69zfbwr"/><path class="xcws4uzia"/></g>`,
		"fallback": "iconoven:meteor",
	});
}

export default Component;
