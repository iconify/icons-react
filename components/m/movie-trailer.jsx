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
		"content": `<style>.nk1fobbcd {
  d: path("M3 3h18v18H3Zm0 3.75h18M3 17.25h18");
}

.sepjjqblv {
  d: path("m9.5 9l5.5 3l-5.5 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nk1fobbcd"/><path class="sepjjqblv"/></g>`,
		"fallback": "uix-sharp:movie-trailer",
	});
}

export default Component;
