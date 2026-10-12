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
		"content": `<style>.vbfinhhea {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.69 3.49L7.43 13.75a3.75 3.75 0 1 0 2.82 2.82L20.51 6.31l1.297-1.515l-2.82-2.82zm-2.12 2.12l1.24 1.24m-3.36.88l1.24 1.24m-3.36.88l1.24 1.24");
}
</style><path class="vbfinhhea"/>`,
		"fallback": "iconoven:thermometer-lab-sharp",
	});
}

export default Component;
