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
		"content": `<style>.bu057zbzx {
  d: path("M17 19V9");
}

.eoov2wehu {
  d: path("m14 12 3 -3 3 3");
}

.eur7p0b8m {
  d: path("m4 18 4 -4 4 4");
}

.fwyf93qcw {
  d: path("M8 8v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vy55o7bfi {
  d: path("M5 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="vy55o7bfi"/><path class="fwyf93qcw"/><path class="eur7p0b8m"/><path class="bu057zbzx"/><path class="eoov2wehu"/></g>`,
		"fallback": "iconmind:stand-reminder-outline-thin",
	});
}

export default Component;
