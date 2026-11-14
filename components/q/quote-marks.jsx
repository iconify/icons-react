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
		"content": `<style>.h4ae9ei_i {
  d: path("M3.75 10a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mbfpv0o7e {
  d: path("M10.25 10c0 4-1.75 7-5.25 8.5m8.25-8.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}

.tv7i-jahi {
  d: path("M19.75 10c0 4-1.75 7-5.25 8.5");
}
</style><g class="hntgybcog"><path class="h4ae9ei_i"/><path class="mbfpv0o7e"/><path class="tv7i-jahi"/></g>`,
		"fallback": "uix:quote-marks",
	});
}

export default Component;
