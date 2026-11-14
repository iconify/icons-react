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
		"content": `<style>.jn_9u-bew {
  d: path("M3 21.5h9M6 7h3v14.5H6Z");
}

.pqqfnebfw {
  d: path("m7.5 7l6-3.5l5.5 8V15m-2 0h4l-1 4h-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jn_9u-bew"/><path class="pqqfnebfw"/></g>`,
		"fallback": "uix-sharp:loading-arm",
	});
}

export default Component;
