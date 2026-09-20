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
		"content": `<style>.bx_argeyt {
  d: path("M4 15a4 4 0 0 1 8 0");
}

.d4rfzbb0c {
  d: path("M6 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.upu8uhb6u {
  d: path("m14 13 2 2 3.5 -3.5");
}
</style><g class="hntgybcog"><path class="d4rfzbb0c"/><path class="bx_argeyt"/><path class="upu8uhb6u"/></g>`,
		"fallback": "iconmind:user-consent-outline-thin",
	});
}

export default Component;
