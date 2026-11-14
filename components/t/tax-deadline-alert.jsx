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
		"content": `<style>.wvtqc8fgr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 19H3.5V4h17v7.7M3.5 9h17M8 2.5v3m8-3v3m2 9V18m0 3h.01");
}
</style><path class="wvtqc8fgr"/>`,
		"fallback": "uix-sharp:tax-deadline-alert",
	});
}

export default Component;
