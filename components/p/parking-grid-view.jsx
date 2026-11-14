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
		"content": `<style>.cwxnuev8o {
  d: path("M15.25 18.75v-4H17a1.375 1.375 0 0 1 0 2.75h-1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p-_0sefac {
  d: path("M7.75 2.5h8.5a5.25 5.25 0 0 1 5.25 5.25v8.5a5.25 5.25 0 0 1-5.25 5.25h-8.5a5.25 5.25 0 0 1-5.25-5.25v-8.5A5.25 5.25 0 0 1 7.75 2.5m4.25 0v19M2.5 12h19");
}
</style><g class="hntgybcog"><path class="p-_0sefac"/><path class="cwxnuev8o"/></g>`,
		"fallback": "uix:parking-grid-view",
	});
}

export default Component;
