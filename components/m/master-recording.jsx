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
		"content": `<style>.rvtqiebzl {
  d: path("M3 11.5a9 9 0 1 0 18 0a9 9 0 1 0-18 0Zm9 9h9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xsz9a3boe {
  d: path("M10.25 7.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-3.75 6.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm7.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="rvtqiebzl"/><path class="xsz9a3boe"/></g>`,
		"fallback": "uix-sharp:master-recording",
	});
}

export default Component;
