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
		"content": `<style>.gtcn8dbjg {
  d: path("M3 17.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm4.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm6.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm4.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM7 6.25h10M8.75 4.5L7 6.25L8.75 8m6.5-3.5L17 6.25L15.25 8");
}

.ii612obwb {
  d: path("M2.5 16.5V13L4 10.5h4l2.5 2.75v3.25Zm11 0V13l1.5-2.5h4l2.5 2.75v3.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ii612obwb"/><path class="gtcn8dbjg"/></g>`,
		"fallback": "uix-sharp:interval-gap",
	});
}

export default Component;
