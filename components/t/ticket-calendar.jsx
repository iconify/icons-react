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
		"content": `<style>.mkbj4wpyq {
  d: path("M9 12.5h12.5v2.75a1.75 1.75 0 0 0 0 3.5v2.75H9v-2.75a1.75 1.75 0 0 0 0-3.5Z");
}

.ngkoguy7b {
  d: path("M6.25 17.5H4.5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v3.25M2.5 8.5h13m-9-6v3.25m5-3.25v3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ngkoguy7b"/><path class="mkbj4wpyq"/></g>`,
		"fallback": "uix-sharp:ticket-calendar",
	});
}

export default Component;
