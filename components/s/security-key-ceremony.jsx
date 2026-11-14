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
		"content": `<style>.r_p5gt8az {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m9 0h10m-3 0v3m3-3V17M3.5 6.5V4.737a.513.513 0 0 1 .875-.362a.993.993 0 0 0 1.539-.169l.211-.331a1.037 1.037 0 0 1 1.75 0l.211.331a.993.993 0 0 0 1.539.169a.513.513 0 0 1 .875.362V6.5A1.5 1.5 0 0 1 9 8H5a1.5 1.5 0 0 1-1.5-1.5");
}
</style><path class="r_p5gt8az"/>`,
		"fallback": "uix:security-key-ceremony",
	});
}

export default Component;
