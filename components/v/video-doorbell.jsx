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

.jzr1xi36d {
  d: path("M9.5 8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M12 8h.01M10 15.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.vlf_y8wtt {
  d: path("M12 2.5za5 5 0 0 1 5 5v9a5 5 0 0 1-5 5a5 5 0 0 1-5-5v-9a5 5 0 0 1 5-5");
}
</style><g class="hntgybcog"><path class="vlf_y8wtt"/><path class="jzr1xi36d"/></g>`,
		"fallback": "uix:video-doorbell",
	});
}

export default Component;
