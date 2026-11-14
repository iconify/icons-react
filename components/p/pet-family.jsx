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
		"content": `<style>.j6vs51bqx {
  d: path("M13.56 20.5H4v-10l8-7l8 7v2.44");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uoze0k33e {
  d: path("M16 7V4h2v4.75m.5 12.75c-4.5-3-3.75-7.25 0-5.25c3.75-2 4.5 2.25 0 5.25Z");
}
</style><g class="ulnmmdpxh"><path class="j6vs51bqx"/><path class="uoze0k33e"/></g>`,
		"fallback": "uix-sharp:pet-family",
	});
}

export default Component;
