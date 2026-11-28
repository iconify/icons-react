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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.jv0d3_8rt {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 21H2C1.448 21 1 20.5523 1 20V4C1 3.4477 1.448 3 2 3H3L21 21ZM6.743 3H22C22.552 3 23 3.4477 23 4V19.2574L6.743 3Z");
  stroke: none;
}

.k7j5vxwqk {
  d: path("M20 20H2V4H4M7 16H16M1.707 1.7071L22.293 22.293");
}

.yc7wqobgl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 11H7V13H5V11Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="jv0d3_8rt"/><path clip-rule="evenodd" class="yc7wqobgl"/><path class="k7j5vxwqk"/></g>`,
		"fallback": "keyline-icons:keyboard-off-sharp-two-tone",
	});
}

export default Component;
