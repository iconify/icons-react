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
		"content": `<style>.a-wplf-uj {
  d: path("M16 21V9H7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wd2ghz3oy {
  d: path("M10 6 7 9l3 3");
}
</style><g class="hntgybcog"><path class="a-wplf-uj"/><path class="wd2ghz3oy"/></g>`,
		"fallback": "iconmind:turn-left-outline-thin",
	});
}

export default Component;
