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
		"content": `<style>.s-khnxb8i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21.5l5.5-19m12.5 19l-5.5-19M12 3v4m-3.75 6q1.25-1.25 2.5 0t2.5 0t2.5 0M7 17.5q1.25-1.25 2.5 0t2.5 0t2.5 0t2.5 0");
}
</style><path class="s-khnxb8i"/>`,
		"fallback": "uix-sharp:road-mud",
	});
}

export default Component;
