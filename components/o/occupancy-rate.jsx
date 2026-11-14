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
		"content": `<style>.q5fm5qhbb {
  d: path("M4.5 8.5V20h6.1m6.4-9.8V8.5m-4 9a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.ri8hejbxk {
  fill: currentColor;
  d: path("M17.5 17.5v-1.75a1.75 1.75 0 1 0 1.75 1.75Z");
}

.rsr2n-zcx {
  d: path("m2.5 10l8.25-7L19 10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rsr2n-zcx"/><path class="q5fm5qhbb"/><path class="ri8hejbxk"/></g>`,
		"fallback": "uix-sharp:occupancy-rate",
	});
}

export default Component;
