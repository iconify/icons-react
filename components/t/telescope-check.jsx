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
		"content": `<style>.zcnsrubgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.646 8.904l13.595-6.339l2.113 4.531l-13.595 6.339ZM10.5 10.75L6.5 21m4-10.25l1.607 5.988m.932 3.477l.211.785m1.5-3l2 2L21 15.75");
}
</style><path class="zcnsrubgu"/>`,
		"fallback": "uix-sharp:telescope-check",
	});
}

export default Component;
