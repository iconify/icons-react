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
		"content": `<style>.l-v0t7b6b {
  d: path("m4.5 3l2 10m0 0h7.6m-6.6 0L7 18.5m-4.5-1c2.212 1.58 5.422 2.361 8.873 1.965M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l-v0t7b6b"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:pension-plan",
	});
}

export default Component;
