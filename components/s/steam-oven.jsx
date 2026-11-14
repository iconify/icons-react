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
		"content": `<style>.f87wm-bnp {
  d: path("M9.5 16.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-.5-11C7.75 4.25 10.25 3 9 2m6 3.25C13.75 4.25 16.25 3 15 2");
}

.rnp9bpbao {
  d: path("M3 8h18v13.5H3Zm0 3h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rnp9bpbao"/><path class="f87wm-bnp"/></g>`,
		"fallback": "uix-sharp:steam-oven",
	});
}

export default Component;
