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
		"content": `<style>.pilge_bsd {
  d: path("M2.5 16.5V8H10v8.5m0-5.5h4l2-3h2l3 4v4.5H10");
}

.rzri7m55z {
  d: path("M4 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm8.25 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pilge_bsd"/><path class="rzri7m55z"/></g>`,
		"fallback": "uix-sharp:semi-truck",
	});
}

export default Component;
