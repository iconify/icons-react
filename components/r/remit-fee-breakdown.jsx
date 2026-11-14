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
		"content": `<style>.fj2hz2iut {
  d: path("M8.5 5.75h7v1.5h-7Zm0 4.25h5v1.5h-5Zm0 4.25h3v1.5h-3Z");
}

.ghe12obwf {
  d: path("M5 2.5h14v19L16.75 20l-2.25 1.5L12 20l-2.5 1.5L7.25 20L5 21.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ghe12obwf"/><path class="fj2hz2iut"/></g>`,
		"fallback": "uix-sharp:remit-fee-breakdown",
	});
}

export default Component;
