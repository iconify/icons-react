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
		"content": `<style>.goj0ag0ih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 17a6 6 0 0 1 12 0M5.25 17h13.5a1.75 1.75 0 0 1 1.75 1.75v.5A1.75 1.75 0 0 1 18.75 21H5.25a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 5.25 17M12 3v3.5m-6.75-.75l2 2m11.5-2l-2 2M2.5 12h2.25m14.5 0h2.25");
}
</style><path class="goj0ag0ih"/>`,
		"fallback": "uix:security-alarm-bank",
	});
}

export default Component;
