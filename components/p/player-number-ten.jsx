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
		"content": `<style>.jo-3t9vdp {
  d: path("M8.25 12.75L9.5 11.5v7m2.75-3.5a1.75 3.5 0 1 0 3.5 0a1.75 3.5 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vdff0qbro {
  d: path("M8.5 2.5q3.5 3 7 0L21.75 6l-2 4.5l-1.5-.75V21.5H5.75V9.75l-1.5.75l-2-4.5Z");
}
</style><g class="ulnmmdpxh"><path class="vdff0qbro"/><path class="jo-3t9vdp"/></g>`,
		"fallback": "uix-sharp:player-number-ten",
	});
}

export default Component;
