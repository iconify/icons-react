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
		"content": `<style>.hcg8evbbc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 20.5V8L12 4l2.5 4v12.5m-6.75 0l-3.5-6l.25-3.75l3.25 1.75l1.75 3m6.75 5l3.5-6l-.25-3.75l-3.25 1.75l-1.75 3m-11 5h17");
}
</style><path class="hcg8evbbc"/>`,
		"fallback": "uix-sharp:mineral-sample",
	});
}

export default Component;
