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
		"content": `<style>.fc58hkuzm {
  d: path("M12 21.5L5 13c-2-2.5-2-6.5 1-8.5C8.5 3 11 4 12 6c1-2 3.5-3 6-1.5c3 2 3 6 1 8.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.swaykybso {
  d: path("M10 10.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="fc58hkuzm"/><path class="swaykybso"/></g>`,
		"fallback": "uix:local-maker-sign",
	});
}

export default Component;
