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
		"content": `<style>.ocmla0jdf {
  d: path("M9 9h6v6H9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xfkadtbjj {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Zm19 0H19M2.5 12H5m7-9.5V5m0 16.5V19m6.75-.25L17 17M5.25 18.75L7 17M5.25 5.25L7 7m11.75-1.75L17 7");
}
</style><g class="ulnmmdpxh"><path class="xfkadtbjj"/><path class="ocmla0jdf"/></g>`,
		"fallback": "uix-sharp:stone-calendar",
	});
}

export default Component;
