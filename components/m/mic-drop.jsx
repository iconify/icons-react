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
		"content": `<style>.rd76scsbr {
  d: path("m13.652 2.139l5.196 3l-4 6.928l-5.196-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yfhh6d95g {
  d: path("m10.951 9.817l2.598 1.5L8.9 17.87l-1.3-.75ZM3 21.5h18M11.652 5.603l5.196 3");
}
</style><g class="ulnmmdpxh"><path class="rd76scsbr"/><path class="yfhh6d95g"/></g>`,
		"fallback": "uix-sharp:mic-drop",
	});
}

export default Component;
