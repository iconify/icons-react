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
		"content": `<style>.phzz9fbox {
  d: path("M8.75 7.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v4hkxp3ww {
  d: path("M3 10c2.5 3.5 6 3.75 9 3.75s6.5-.25 9-3.75M2.5 18.5q2.25-1.75 4.75 0q2.25 1.75 4.75 0q2.25-1.75 4.75 0q2.25 1.75 4.75 0");
}
</style><g class="ulnmmdpxh"><path class="phzz9fbox"/><path class="v4hkxp3ww"/></g>`,
		"fallback": "uix-sharp:swimmer-breaststroke",
	});
}

export default Component;
