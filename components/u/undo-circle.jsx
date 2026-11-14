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
		"content": `<style>.g73wcxbuw {
  d: path("M10.5 7.5L8 10l2.5 2.5");
}

.lrp8at_ng {
  d: path("M8.5 10h5a2.75 2.75 0 0 1 0 5.5H11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="lrp8at_ng"/><path class="g73wcxbuw"/></g>`,
		"fallback": "uix-sharp:undo-circle",
	});
}

export default Component;
