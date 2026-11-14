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
		"content": `<style>.goxf-3b_m {
  d: path("M16.75 15.75V14L18 15l1.25-1v1.75");
}

.l_yqoccsh {
  d: path("M3 2.5h9.5l-1 19H4ZM3.25 6h9M15 18.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l_yqoccsh"/><path class="goxf-3b_m"/></g>`,
		"fallback": "uix-sharp:pomegranate-juice",
	});
}

export default Component;
