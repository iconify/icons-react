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
		"content": `<style>.s9y3tt6_a {
  d: path("M5 21V9.5L11 3h8v14.5L13 21Z");
}

.tyqpq712i {
  d: path("M5 9.5h8V21m0-11.5L19 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s9y3tt6_a"/><path class="tyqpq712i"/></g>`,
		"fallback": "uix-sharp:ski-wax",
	});
}

export default Component;
