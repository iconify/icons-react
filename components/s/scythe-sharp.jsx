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
		"content": `<style>.f2erstbyk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16 2.75C14.25 6 15.75 8.5 13 12s-4 3.25-4 5.75M14 5l2.5 1m-5.75 5.25l2.5 1M9 17.75c-2.5-.5-5 1-6.25 3.25C5 20.25 7 20.5 9 21.25Z");
}
</style><path class="f2erstbyk"/>`,
		"fallback": "iconoven:scythe-sharp",
	});
}

export default Component;
