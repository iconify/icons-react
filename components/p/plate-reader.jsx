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
		"content": `<style>.h8wqd2bde {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v12h-19ZM5 15v5.5h14V15M6 7h5M8.5 17.75h.01m3.49 0h.01m3.49 0h.01");
}
</style><path class="h8wqd2bde"/>`,
		"fallback": "uix-sharp:plate-reader",
	});
}

export default Component;
