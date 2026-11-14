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
		"content": `<style>.h4s22dbpt {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wwz6avtlk {
  d: path("M5.5 10.5h13v3h-13Z");
}
</style><g class="ulnmmdpxh"><path class="h4s22dbpt"/><path class="wwz6avtlk"/></g>`,
		"fallback": "uix-sharp:screw-head-slotted",
	});
}

export default Component;
