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
		"content": `<style>.fs-y_3bad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 5.5h14v13h-14Zm0 0l-5 2v9l5 2Zm9 0v13m2.5-9h.01m-.01 4h.01");
}
</style><path class="fs-y_3bad"/>`,
		"fallback": "uix-sharp:microwave-open",
	});
}

export default Component;
