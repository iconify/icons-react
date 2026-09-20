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

.qmonhebui {
  d: path("M3 4h6c0 -1.5 4 -1.5 4 0v6H3Z");
}

.zmangp7gz {
  d: path("M11 13h10v6c0 1.5 -4 1.5 -4 0h-6Z");
}
</style><g class="hntgybcog"><path class="qmonhebui"/><path class="zmangp7gz"/></g>`,
		"fallback": "iconmind:puzzle-hobby-outline-thin",
	});
}

export default Component;
