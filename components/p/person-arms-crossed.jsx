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
		"content": `<style>.e2ok8rb2g {
  d: path("M7 15.75h10v3.5H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yy7z_ac1b {
  d: path("M8.5 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm-4 15V17c0-2.75 3.25-4.25 7.5-4.25s7.5 1.5 7.5 4.25v4.5");
}
</style><g class="ulnmmdpxh"><path class="yy7z_ac1b"/><path class="e2ok8rb2g"/></g>`,
		"fallback": "uix-sharp:person-arms-crossed",
	});
}

export default Component;
