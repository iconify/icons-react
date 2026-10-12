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
		"content": `<style>.esfanjssi {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 4.25c4.75-2 8.75 2 14.5 0a.75.75 0 0 1 1 .7v8.85a.75.75 0 0 1-.5.7c-5.75 2-9.75-2-15 0Zm0 17v-17m7.25 2V9.5");
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="esfanjssi"/><path class="to8m3ibcr"/></g>`,
		"fallback": "iconoven:report-flag",
	});
}

export default Component;
