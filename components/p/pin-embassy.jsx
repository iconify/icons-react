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
		"content": `<style>.g7_xkobru {
  d: path("M5.25 11h13.5a1.75 1.75 0 0 1 1.75 1.75v6.5A1.75 1.75 0 0 1 18.75 21H5.25a1.75 1.75 0 0 1-1.75-1.75v-6.5A1.75 1.75 0 0 1 5.25 11M12 11V2.5m0 0h6l-1.5 2.25L18 7h-6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ijr-zmf5r {
  d: path("M9.5 21v-4.5h5V21");
}
</style><g class="hntgybcog"><path class="g7_xkobru"/><path class="ijr-zmf5r"/></g>`,
		"fallback": "uix:pin-embassy",
	});
}

export default Component;
