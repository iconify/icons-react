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
		"content": `<style>.gm4fzwibp {
  d: path("m6.5 11.5l2.5-3h4l3 3l3-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wmvzeqkoc {
  d: path("M13.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-.5 4L10.5 14l4 2.5l-1 4.5m-3-7L8 18l-4 .5");
}
</style><g class="ulnmmdpxh"><path class="wmvzeqkoc"/><path class="gm4fzwibp"/></g>`,
		"fallback": "uix-sharp:sprint-player",
	});
}

export default Component;
