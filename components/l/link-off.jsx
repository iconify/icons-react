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
		"content": `<style>.sh46e33-n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 16.5a4.5 4.5 0 0 1-2.645-8.141M7.5 16.5H9m7.5-9a4.5 4.5 0 0 1 2.645 8.141M15 7.5h1.5m-13-4l17 17");
}
</style><path class="sh46e33-n"/>`,
		"fallback": "uix-sharp:link-off",
	});
}

export default Component;
