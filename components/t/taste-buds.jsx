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
		"content": `<style>.kqizwybyw {
  d: path("M3 6q9 5 18 0");
}

.qyk_klboo {
  d: path("M7 7.75v5.75a5 5 0 0 0 10 0V7.75m-5 3.5v4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kqizwybyw"/><path class="qyk_klboo"/></g>`,
		"fallback": "uix-sharp:taste-buds",
	});
}

export default Component;
