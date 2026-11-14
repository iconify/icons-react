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
		"content": `<style>.k5om1hbaz {
  d: path("m10 10l-2 2l2 2m4-4l2 2l-2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zv2ap23oe {
  d: path("M3.5 4h17a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1ZM12 4v3.5m0 9V20m-4-8h8");
}
</style><g class="ulnmmdpxh"><path class="zv2ap23oe"/><path class="k5om1hbaz"/></g>`,
		"fallback": "uix-sharp:split-pane-resize",
	});
}

export default Component;
