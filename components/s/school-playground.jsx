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
		"content": `<style>.fztekhcov {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21V7m4 14V7m-4 4.5h4M4 16h4m0-9c2 0 3 1 4 3l4 8c.75 1.5 2 2.5 4 2.5");
}
</style><path class="fztekhcov"/>`,
		"fallback": "uix-sharp:school-playground",
	});
}

export default Component;
