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
		"content": `<style>.lk7oulbbp {
  d: path("M7.5 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.m-gmjhbdm {
  d: path("M14.5 8v4l3 2m-15-5h2.25M2 12h2.75M2.5 15h2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lk7oulbbp"/><path class="m-gmjhbdm"/></g>`,
		"fallback": "uix-sharp:late-arrival",
	});
}

export default Component;
