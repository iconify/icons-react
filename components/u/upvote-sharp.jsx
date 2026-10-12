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
		"content": `<style>.fzfa9xrtu {
  d: path("M9.75 15.5L12 13.25l2.25 2.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xkosebb9k {
  d: path("m13.05 3.83l6.9 7.09L21 12h-5v9.25H8V12H3l1.05-1.08l6.9-7.09L12 2.75z");
}
</style><g class="x2cwu0gfd"><path class="xkosebb9k"/><path class="fzfa9xrtu"/></g>`,
		"fallback": "iconoven:upvote-sharp",
	});
}

export default Component;
