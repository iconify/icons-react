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

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}

.za9x73s_d {
  d: path("M10 10h4l-4 4h4Z");
}
</style><g class="hntgybcog"><path class="ugdbidcqi"/><path class="za9x73s_d"/></g>`,
		"fallback": "iconmind:session-timeout-outline-thin",
	});
}

export default Component;
