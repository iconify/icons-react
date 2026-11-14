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
		"content": `<style>.aejjo-v6j {
  d: path("M5.5 10.5V19A2.5 2.5 0 0 0 8 21.5h8a2.5 2.5 0 0 0 2.5-2.5v-8.5");
}

.ikk44vl5l {
  d: path("M7 7.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm3.5 11h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z4jvrublp {
  d: path("M13.75 5.75c-.25-.65-.85-1-1.75-1c-1 0-1.75.5-1.75 1.25c0 1.6 3.5 1 3.5 2.75C13.75 9.5 13 10 12 10c-.9 0-1.55-.3-1.75-.75");
}
</style><g class="ulnmmdpxh"><path class="aejjo-v6j"/><path class="ikk44vl5l"/><path class="z4jvrublp"/></g>`,
		"fallback": "uix-sharp:remit-mobile-money",
	});
}

export default Component;
