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
		"content": `<style>.lr1yyx9sp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11.5a9 9 0 0 1 9 9m-9 0l9.61-13.72");
}

.vw32xbcti {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5V3.75A16.75 16.75 0 0 1 20.25 20.5Z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zo_q_kmis {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.5 15.5h.01");
}
</style><g class="y9tr6bcfx"><path class="vw32xbcti"/><path class="lr1yyx9sp"/><path class="zo_q_kmis"/></g>`,
		"fallback": "iconoven:threat-radar",
	});
}

export default Component;
