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
		"content": `<style>.dqy1cjmbf {
  d: path("M10.25 16a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM5 13.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM6.75 8a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm6 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.q60nlbbuy {
  d: path("M12 3c5.5 0 9.5 3.5 9.5 8c0 2.5-2 3-3.5 3c-2 0-2.5 1.5-1.5 3.5c.75 2-1.5 3.5-4.5 3.5c-5.5 0-9.5-4-9.5-9s4-9 9.5-9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q60nlbbuy"/><path class="dqy1cjmbf"/></g>`,
		"fallback": "uix-sharp:paint-palette-kids",
	});
}

export default Component;
