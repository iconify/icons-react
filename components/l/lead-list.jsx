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
		"content": `<style>.wpjiykb7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-1 8.5c0-2 1.5-3 3.5-3s3.5 1 3.5 3m3-8.5H21M12.5 11h6m-14 7.5h.01m3.99 0H21");
}
</style><path class="wpjiykb7s"/>`,
		"fallback": "uix-sharp:lead-list",
	});
}

export default Component;
