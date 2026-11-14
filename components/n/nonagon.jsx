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
		"content": `<style>.ey8hbsbby {
  d: path("M8.75 21.5L3.5 17.25l-1-6.75l3.25-5.75L12 2.5");
}

.kix0ieubt {
  d: path("m12 2.5l6.25 2.25l3.25 5.75l-1 6.75l-5.25 4.25h-6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kix0ieubt"/><path class="ey8hbsbby"/></g>`,
		"fallback": "uix-sharp:nonagon",
	});
}

export default Component;
