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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wkk1ibbek {
  d: path("M8.5 15a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.wkqus2bji {
  d: path("M2.5 2.5h11v11h-11Z");
}
</style><g class="ulnmmdpxh"><path class="wkqus2bji"/><path class="wkk1ibbek"/></g>`,
		"fallback": "uix-sharp:union-type",
	});
}

export default Component;
