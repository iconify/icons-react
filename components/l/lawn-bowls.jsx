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
		"content": `<style>.ehl_ou5hm {
  d: path("M5.25 15a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm11 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.rs4sdhbmt {
  d: path("M2.5 15a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm11 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM10 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rs4sdhbmt"/><path class="ehl_ou5hm"/></g>`,
		"fallback": "uix-sharp:lawn-bowls",
	});
}

export default Component;
