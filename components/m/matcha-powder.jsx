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
		"content": `<style>.jt57jtz_w {
  d: path("M4 11a8 2.5 0 1 0 16 0a8 2.5 0 1 0-16 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yldmb4oax {
  d: path("M4 11v7.5Q4 21 6.5 21h11q2.5 0 2.5-2.5V11M2.844 5.614l8.457-3.078l.855 2.35l-8.457 3.078ZM13 10l5.5-6.5");
}
</style><g class="ulnmmdpxh"><path class="jt57jtz_w"/><path class="yldmb4oax"/></g>`,
		"fallback": "uix-sharp:matcha-powder",
	});
}

export default Component;
