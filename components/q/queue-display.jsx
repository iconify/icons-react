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
		"content": `<style>.hq-h8uxcp {
  d: path("M2.5 3.5h19v13h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vf7j5-b7h {
  d: path("M5.5 7h4l-2.25 6m5.25-3h6m-2.25-2.25L18.5 10l-2.25 2.25M12 16.5v4m-3.5 0h7");
}
</style><g class="ulnmmdpxh"><path class="hq-h8uxcp"/><path class="vf7j5-b7h"/></g>`,
		"fallback": "uix-sharp:queue-display",
	});
}

export default Component;
