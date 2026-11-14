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
		"content": `<style>.ehs209b4w {
  d: path("m12 3l9.5 17.5h-19Z");
}

.tg6kllbvn {
  d: path("M9.5 12.75q1.25-1.25 2.5 0t2.5 0M7.5 17q1.5-1.25 3 0t3 0t3 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ehs209b4w"/><path class="tg6kllbvn"/></g>`,
		"fallback": "uix-sharp:warning-deep-water",
	});
}

export default Component;
