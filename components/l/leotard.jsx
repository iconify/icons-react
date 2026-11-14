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
		"content": `<style>.n5v89obeg {
  d: path("M8.5 6.5q3.5 4.5 7 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w1zjl4b3s {
  d: path("M8.5 2.5v4c0 1.5-3 2.5-3 5v2l5 8h3l5-8v-2c0-2.5-3-3.5-3-5v-4");
}
</style><g class="ulnmmdpxh"><path class="w1zjl4b3s"/><path class="n5v89obeg"/></g>`,
		"fallback": "uix-sharp:leotard",
	});
}

export default Component;
