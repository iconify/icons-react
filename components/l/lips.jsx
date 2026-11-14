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
		"content": `<style>.emjjmgbrt {
  d: path("M2.5 12c3.5-.5 6.5 1 9.5.25c3 .75 6-.75 9.5-.25");
}

.kc2zl0bqq {
  d: path("M2.5 12Q7 6 10 6c1 0 1.5.75 2 .75S13 6 14 6q3 0 7.5 6c-3 4.5-6 6-9.5 6s-6.5-1.5-9.5-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kc2zl0bqq"/><path class="emjjmgbrt"/></g>`,
		"fallback": "uix-sharp:lips",
	});
}

export default Component;
