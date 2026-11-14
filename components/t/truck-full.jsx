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
		"content": `<style>.adx0rcclm {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-11-11H8V14H4.5Zm4.5 0h3.5V14H9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ygoj94b5b {
  d: path("M2.5 5.5h12v11h-12Zm12 3h4l3 3.5v4.5h-7");
}
</style><g class="ulnmmdpxh"><path class="ygoj94b5b"/><path class="adx0rcclm"/></g>`,
		"fallback": "uix-sharp:truck-full",
	});
}

export default Component;
