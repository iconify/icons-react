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
		"content": `<style>.jj17v8bjn {
  d: path("m2.5 13.75l9.5 5.5l9.5-5.5M8.75 10l1.75-1.5h4.75v3H10.5L8.75 10");
}

.pao7rmv1s {
  d: path("m12 4.5l9.5 5.5l-9.5 5.5L2.5 10Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pao7rmv1s"/><path class="jj17v8bjn"/></g>`,
		"fallback": "uix-sharp:semantic-layer",
	});
}

export default Component;
