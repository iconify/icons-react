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
		"content": `<style>.f-1-_-jfw {
  d: path("M8.5 2.5h7V7h-7ZM7.5 7h9v14.5h-9Zm3.25-2.25h.01m2.49 0h.01");
}

.oxsjddcmk {
  d: path("M10.5 17.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f-1-_-jfw"/><path class="oxsjddcmk"/></g>`,
		"fallback": "uix-sharp:usb-stick",
	});
}

export default Component;
