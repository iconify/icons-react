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
		"content": `<style>.jtn9exb6d {
  d: path("M4 2.5h16v19H4Zm3 4h10");
}

.rl4qg70gb {
  d: path("M7 9.5h10V14H7Zm0 8.25h5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jtn9exb6d"/><path class="rl4qg70gb"/></g>`,
		"fallback": "uix-sharp:proposal-template",
	});
}

export default Component;
