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
		"content": `<style>.patdnnb-x {
  d: path("M5.25 14.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm8.75 0h4.5");
}

.rqlutefrv {
  d: path("M2.5 8h19v13h-19ZM15 8l5-5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rqlutefrv"/><path class="patdnnb-x"/></g>`,
		"fallback": "uix-sharp:shortwave-radio",
	});
}

export default Component;
