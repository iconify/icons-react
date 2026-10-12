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
		"content": `<style>.ed328fbvv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.31 3.99l1.03 2.51l.31.73l.79.07l2.71.21l.79.06l-.6.52l-2.07 1.76l-.61.52l.19.77l.64 2.64l.18.78l-.68-.42l-2.31-1.42l-.68-.42l-.68.42l-2.31 1.42l-.68.42l.18-.78l.64-2.64l.19-.77l-.61-.52l-2.07-1.76l-.6-.52l.79-.06l2.71-.21l.79-.07l.31-.73l1.03-2.51l.31-.74zM3 21l6-6m-6.25.25l4-4m2 10L12 18");
}
</style><path class="ed328fbvv"/>`,
		"fallback": "iconoven:shooting-star-sharp",
	});
}

export default Component;
