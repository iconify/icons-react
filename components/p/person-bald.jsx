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

.w0g36eu5v {
  d: path("M6.5 8a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0ZM4 21.5c0-3 3.5-5 8-5s8 2 8 5");
}

.wt84p91aa {
  d: path("M9.25 8A2.75 2.75 0 0 1 12 5.25");
}
</style><g class="ulnmmdpxh"><path class="w0g36eu5v"/><path class="wt84p91aa"/></g>`,
		"fallback": "uix-sharp:person-bald",
	});
}

export default Component;
