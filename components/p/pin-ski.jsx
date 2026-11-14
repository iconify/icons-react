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
		"content": `<style>.abgncsbii {
  d: path("M12 22c-3.5-2.5-9-6.5-9-11a9 9 0 0 1 18 0c0 4.5-5.5 8.5-9 11Z");
}

.jvir842yv {
  d: path("M7 12.5L13.5 6q1-1 1.75-.25M9 14.5L15.5 8q1-1 1.75-.25M8.5 8l7 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="abgncsbii"/><path class="jvir842yv"/></g>`,
		"fallback": "uix-sharp:pin-ski",
	});
}

export default Component;
