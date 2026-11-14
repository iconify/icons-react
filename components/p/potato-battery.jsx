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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vthzcsugq {
  d: path("M15.5 12.5v-5c0-3.5 3.5-4 5-1.5M6 15.5h.01M15.5 18h.01");
}

.ymjbnub8l {
  d: path("M2.5 15.5a9.5 6 0 1 0 19 0a9.5 6 0 1 0-19 0Zm5.5-3V4");
}
</style><g class="ulnmmdpxh"><path class="ymjbnub8l"/><path class="vthzcsugq"/></g>`,
		"fallback": "uix-sharp:potato-battery",
	});
}

export default Component;
