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
		"content": `<style>.nf96v8b3i {
  d: path("M2.5 3.5h19v17h-19Zm9.5 0v17m0-8.5h9.5");
}

.s4-_4xbpk {
  d: path("M5.5 9.5L8 12l-2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nf96v8b3i"/><path class="s4-_4xbpk"/></g>`,
		"fallback": "uix-sharp:tmux",
	});
}

export default Component;
