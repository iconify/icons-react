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
		"content": `<style>.udffosbas {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 15a5.5 6.25 0 1 0 11 0a5.5 6.25 0 1 0-11 0M12 8.75V3.5m0 5.25l-3.5-3.5m3.5 3.5l3.5-3.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zwlicbbhm {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01M9.5 15h.01m4.99 0h.01M12 18h.01");
}
</style><g class="y9tr6bcfx"><path class="udffosbas"/><path class="zwlicbbhm"/></g>`,
		"fallback": "iconoven:pineapple",
	});
}

export default Component;
