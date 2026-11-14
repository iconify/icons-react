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
		"content": `<style>.ejkj6th1k {
  d: path("M16.25 15.5h4.25v4.25");
}

.q8yna4kqt {
  d: path("M13.1 19H2.5V5h19v7.7M6.5 9v6M10 9v6m3.5-6v3.7M15 21l5.25-5.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q8yna4kqt"/><path class="ejkj6th1k"/></g>`,
		"fallback": "uix-sharp:port-open",
	});
}

export default Component;
