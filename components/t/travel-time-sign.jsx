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
		"content": `<style>.g27po57by {
  d: path("M5.25 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.jzslicczf {
  d: path("M2.5 3h19v13h-19ZM7 16v5m10-5v5");
}

.l_y5tz2gr {
  d: path("M8.25 8v1.5l1.25 1M14.25 8h4.5m-4.5 3h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jzslicczf"/><path class="g27po57by"/><path class="l_y5tz2gr"/></g>`,
		"fallback": "uix-sharp:travel-time-sign",
	});
}

export default Component;
