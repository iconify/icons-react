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
		"content": `<style>.ldtt98bnr {
  d: path("M5 8v13.5h14V8");
}

.rew5jknam {
  fill: currentColor;
  d: path("M3 3.5h18V8H3Z");
}

.rwlmyhbeb {
  d: path("M8 11.5h1.5m5 0H16M8 15h1.5m5 0H16m-5.5 6.5v-3h3v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ldtt98bnr"/><path class="rew5jknam"/><path class="rwlmyhbeb"/></g>`,
		"fallback": "uix-sharp:penthouse",
	});
}

export default Component;
