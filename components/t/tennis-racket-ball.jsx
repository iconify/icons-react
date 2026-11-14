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
		"content": `<style>.ue49dytuk {
  d: path("M6.5 12.75L9 16l2.5-3.25M9 16v5.5m6.25-3.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm-11-10.25h9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wj8y85aeg {
  d: path("M4.25 7.75a4.75 5.75 0 1 0 9.5 0a4.75 5.75 0 1 0-9.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="wj8y85aeg"/><path class="ue49dytuk"/></g>`,
		"fallback": "uix-sharp:tennis-racket-ball",
	});
}

export default Component;
