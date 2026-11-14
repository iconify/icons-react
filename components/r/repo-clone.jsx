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
		"content": `<style>.cnsb5n80n {
  d: path("M3 17V4.5a2 2 0 0 1 2-2h12m-6.25 4v15M14 6.5v5l1.75-1.25l1.75 1.25v-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vbvo3xvxs {
  d: path("M7.5 6.5H21v15H7.5Z");
}
</style><g class="ulnmmdpxh"><path class="vbvo3xvxs"/><path class="cnsb5n80n"/></g>`,
		"fallback": "uix-sharp:repo-clone",
	});
}

export default Component;
