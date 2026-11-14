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
		"content": `<style>.vuvv7omkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.672 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.922 0 3.639.46 4.944 1.264M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm9 14.5V19m2.75 2.5V17M21 21.5v-7");
}
</style><path class="vuvv7omkb"/>`,
		"fallback": "uix-sharp:risk-actuary",
	});
}

export default Component;
