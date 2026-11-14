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
		"content": `<style>.eiijby2mu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.472 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5q.49 0 .963.039M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm7.75 7h5v7.5h-5Zm2.5 1.75v3m-1.5-1.5h3m1 2.5h2.5M20.5 18.5l1.25 1.25L20.5 21");
}
</style><path class="eiijby2mu"/>`,
		"fallback": "uix-sharp:referral",
	});
}

export default Component;
