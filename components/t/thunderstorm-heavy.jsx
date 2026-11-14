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
		"content": `<style>.u2jzwhbzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 12.5h10a3.5 3.5 0 0 0 0-7a5 5 0 0 0-9 1a3.25 3.25 0 0 0-1 6Zm6.5 0L11 16.25h3l-2.5 4.25m-4-5L6 19m12.5-3.5L17 19");
}
</style><path class="u2jzwhbzh"/>`,
		"fallback": "uix-sharp:thunderstorm-heavy",
	});
}

export default Component;
