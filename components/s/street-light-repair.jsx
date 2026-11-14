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
		"content": `<style>.bg5ytyjxp {
  d: path("M18.75 12v1.5a1 1 0 0 0 1 1h1.5m-8.75 6.25l4.25-4.25");
}

.r8q9ys35q {
  d: path("M6.5 21.5V7a4 4 0 0 1 4-4h2m0 0h8L19 6.5h-5ZM4 21.5h5m12.25-7a2.5 2.5 0 1 1-2.5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r8q9ys35q"/><path class="bg5ytyjxp"/></g>`,
		"fallback": "uix-sharp:street-light-repair",
	});
}

export default Component;
