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
		"content": `<style>.fnrs-ccht {
  d: path("M6.5 15.5a5.5 6 0 1 0 11 0a5.5 6 0 1 0-11 0Zm2.75-5.25L17 18M7 13l7.75 7.75m0-10.5L7 18m10-5l-7.75 7.75");
}

.q82mpgjzn {
  d: path("M12 9.5c-1.25-2.5-1.25-4.75 0-7c1.25 2.25 1.25 4.5 0 7Zm-1.5 0c-2.5-.5-4-2.5-5-5c2.75.5 4.5 2.25 5 5Zm3 0c2.5-.5 4-2.5 5-5c-2.75.5-4.5 2.25-5 5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fnrs-ccht"/><path class="q82mpgjzn"/></g>`,
		"fallback": "uix-sharp:pineapple-plant",
	});
}

export default Component;
