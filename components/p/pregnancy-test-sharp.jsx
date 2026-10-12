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
		"content": `<style>.cvvmbgblk {
  d: path("M9.5 7.5h5V14h-5zM12 9.25v3M7 16.5h10");
}

.j0vlx6bgz {
  d: path("M7 2.75h10v18.5H7z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="j0vlx6bgz"/><path class="cvvmbgblk"/></g>`,
		"fallback": "iconoven:pregnancy-test-sharp",
	});
}

export default Component;
