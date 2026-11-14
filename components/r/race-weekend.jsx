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
		"content": `<style>.j6_st9bwe {
  d: path("M3 3.5h18v18H3Zm5-1v3m8-3v3");
}

.ltadzzb7p {
  d: path("M7 18V8.5h10V14H7m5-5.5V14m-5-2.75h10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j6_st9bwe"/><path class="ltadzzb7p"/></g>`,
		"fallback": "uix-sharp:race-weekend",
	});
}

export default Component;
