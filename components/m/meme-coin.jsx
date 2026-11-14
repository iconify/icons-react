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
		"content": `<style>.jersgrple {
  d: path("M2.75 12a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.pjlk_61ty {
  d: path("M10.25 4.5H14a7.5 7.5 0 0 1 0 15h-3.75M8 9.5h.01m4.49 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wnp6nbbnj {
  d: path("M6.5 13H14a3.75 3.75 0 0 1-7.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="jersgrple"/><path class="pjlk_61ty"/><path class="wnp6nbbnj"/></g>`,
		"fallback": "uix-sharp:meme-coin",
	});
}

export default Component;
