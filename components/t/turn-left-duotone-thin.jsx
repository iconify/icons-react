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

.ac92tok8e {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16 21V9H7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.olxi-hbns {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10 6 7 9l3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wd2ghz3oy {
  d: path("M10 6 7 9l3 3");
}
</style><g class="hntgybcog"><path class="ac92tok8e"/><path class="olxi-hbns"/><path class="a-wplf-uj"/><path class="wd2ghz3oy"/></g>`,
		"fallback": "iconmind:turn-left-duotone-thin",
	});
}

export default Component;
