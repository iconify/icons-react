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
		"content": `<style>.e5ocjco1b {
  d: path("M8 4.5c-5.5 0-5.5 7.5.5 5.5M16 4.5c5.5 0 5.5 7.5-.5 5.5M12 12v5m-3 0h6l1 4H8Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q_jvd8nnh {
  d: path("M8 3h8v5a4 4 0 0 1-8 0Z");
}
</style><g class="hntgybcog"><path class="q_jvd8nnh"/><path class="e5ocjco1b"/></g>`,
		"fallback": "uix:trophy-big-ears",
	});
}

export default Component;
