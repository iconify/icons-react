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
		"content": `<style>.bk0g-aj8f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.75 3.25c-5.5 0-10 3.75-10.5 9.75l.75.75c6-.5 9.75-5 9.75-10.5Zm-9 9L16.5 7.5m-8.25 8.25l2.25-2.25m-7.25 2.25h8.5v5.5h-8.5z");
}
</style><path class="bk0g-aj8f"/>`,
		"fallback": "iconoven:quill-sharp",
	});
}

export default Component;
