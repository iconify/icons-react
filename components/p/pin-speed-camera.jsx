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
		"content": `<style>.ebh2jvmxa {
  d: path("M3.5 4h12v7h-12Zm12 1.5l5-1.5v7l-5-1.5Zm-6 5.5v10.5m-3.5 0h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ya8y-26kf {
  fill: currentColor;
  d: path("M7 7.5h.01");
}
</style><g class="ulnmmdpxh"><path class="ebh2jvmxa"/><path class="ya8y-26kf"/></g>`,
		"fallback": "uix-sharp:pin-speed-camera",
	});
}

export default Component;
