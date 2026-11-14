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
		"content": `<style>.lmm6i3bsq {
  d: path("M7 7v11.5a5 2 0 0 0 10 0V7");
}

.qqpb1lv0n {
  d: path("M7 7a5 2 0 1 0 10 0A5 2 0 1 0 7 7ZM4 9q-1.5 3.5 0 7m16-7q1.5 3.5 0 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lmm6i3bsq"/><path class="qqpb1lv0n"/></g>`,
		"fallback": "uix-sharp:voice-assistant",
	});
}

export default Component;
