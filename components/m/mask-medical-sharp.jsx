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
		"content": `<style>.frkjyob4s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 8.25c3.5-1.5 7.5-1.5 11 0v7.5c-3.5 2-7.5 2-11 0ZM8.75 11h6.5m-6.5 3h6.5M6.5 9.25H2.75V12l-.01 2.769L5.5 15h1m11-5.75h3.75V12l.01 2.769L18.5 15h-1");
}
</style><path class="frkjyob4s"/>`,
		"fallback": "iconoven:mask-medical-sharp",
	});
}

export default Component;
