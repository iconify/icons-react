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
		"content": `<style>.gos5d47es {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM5 7v14.5M5 9c0 2.846 1.652 5.526 5.226 6.429M13 13h5.5l3.5 3.5l-5.5 5.5l-3.5-3.5Zm2.75 2.75h.01");
}
</style><path class="gos5d47es"/>`,
		"fallback": "uix-sharp:release-branch",
	});
}

export default Component;
