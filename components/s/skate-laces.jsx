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
		"content": `<style>.rks02mbyg {
  d: path("M4 3h7l1.5 7l6 2a2 2 0 0 1 1.5 2v2.5H4Zm3 13.5v3m10-3v3m-14 0h18M6.5 5.5l3 3.25m-3 0l3-3.25");
}

.s97trabxn {
  d: path("M11.25 4.5c2.75 0 4 1.5 3.5 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rks02mbyg"/><path class="s97trabxn"/></g>`,
		"fallback": "uix-sharp:skate-laces",
	});
}

export default Component;
