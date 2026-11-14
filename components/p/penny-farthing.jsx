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
		"content": `<style>.am3rabbto {
  d: path("M6 12a8 8 0 1 0 16 0a8 8 0 1 0-16 0Zm-3.5 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM14 12h.01");
}

.smlgng2al {
  d: path("M4.5 19c0-8 2.5-14 7-14.75M9.5 3h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="am3rabbto"/><path class="smlgng2al"/></g>`,
		"fallback": "uix-sharp:penny-farthing",
	});
}

export default Component;
