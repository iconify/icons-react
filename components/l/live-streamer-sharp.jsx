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
		"content": `<style>.m1awmpdbo {
  d: path("M8.5 8.5a4.83 4.83 0 0 0 0 7m7-7a4.83 4.83 0 0 1 0 7M5.25 5.75a9.06 9.06 0 0 0 0 12.5m13.5-12.5a9.06 9.06 0 0 1 0 12.5");
}

.ons53cb4g {
  cx: 12px;
  cy: 12px;
  r: 2.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="ons53cb4g"/><path class="m1awmpdbo"/></g>`,
		"fallback": "iconoven:live-streamer-sharp",
	});
}

export default Component;
