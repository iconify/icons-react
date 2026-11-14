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

.hwzp73xdl {
  d: path("M10.375 2.5h3.25A4.375 4.375 0 0 1 18 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-3.25A4.375 4.375 0 0 1 6 17.125V6.875A4.375 4.375 0 0 1 10.375 2.5");
}

.u95i762fe {
  d: path("m12 9.5l2.25 1.25v2.5L12 14.5l-2.25-1.25v-2.5Zm-2.25 1.25L12 12l2.25-1.25M12 12v2.5M8.75 8V6h1.75m3 0h1.75v2m-6.5 8v2h1.75m3 0h1.75v-2");
}
</style><g class="hntgybcog"><path class="hwzp73xdl"/><path class="u95i762fe"/></g>`,
		"fallback": "uix:phone-3d-scan",
	});
}

export default Component;
