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
		"content": `<style>.e68yliixb {
  d: path("M4.5 3v15.5a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V3m-15 15.5h15m-15-3h15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sjx080b8l {
  d: path("M12 15.5V10m0 1.5c0-2.5 1.75-4 4-4c0 2.5-1.75 4-4 4m0 1C12 10.25 10.25 9 8 9c0 2.25 1.75 3.5 4 3.5");
}
</style><g class="hntgybcog"><path class="e68yliixb"/><path class="sjx080b8l"/></g>`,
		"fallback": "uix:terrarium-layers",
	});
}

export default Component;
