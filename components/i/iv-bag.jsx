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
		"content": `<style>.ndxa_ibjh {
  d: path("M6.5 2.5h11a1 1 0 0 1 1 1V17a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yahc1bcjg {
  d: path("M10.75 5.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM8 9.5h2m-2 2.75h2M8 15h2m2 3v3.5");
}
</style><g class="ulnmmdpxh"><path class="ndxa_ibjh"/><path class="yahc1bcjg"/></g>`,
		"fallback": "uix-sharp:iv-bag",
	});
}

export default Component;
