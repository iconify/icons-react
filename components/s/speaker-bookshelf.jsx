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
		"content": `<style>.j4t2o50nt {
  d: path("M4.5 3h15v16.5h-15Zm2 16.5V21m11-1.5V21");
}

.lwikqr4xv {
  d: path("M8.25 13a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM12 13h.01M12 6.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j4t2o50nt"/><path class="lwikqr4xv"/></g>`,
		"fallback": "uix-sharp:speaker-bookshelf",
	});
}

export default Component;
