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
		"content": `<style>.zofo2hb3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.5 15.153V4C17 3.5 14 4 12 5.5C10 4 7 3.5 2.5 4v13.5C7 17 10 17.5 12 19q.121-.091.247-.177M12 5.5V19m6-4v6m-3-3h6");
}
</style><path class="zofo2hb3a"/>`,
		"fallback": "uix-sharp:price-book-add",
	});
}

export default Component;
