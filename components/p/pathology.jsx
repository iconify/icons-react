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
		"content": `<style>.v9eul8mzi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5h5v8h-5Zm2.5 8v3m-4 1h8M16 5c4 2 4.5 9 1 13.5M5.5 21h13");
}
</style><path class="v9eul8mzi"/>`,
		"fallback": "uix-sharp:pathology",
	});
}

export default Component;
