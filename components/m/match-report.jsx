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
		"content": `<style>.i04io93ly {
  d: path("M13.5 2.5V8H19M8.5 12h7m-7 4H13");
}

.k17mfn4sq {
  d: path("M7 2.5h6.5L19 8v11.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k17mfn4sq"/><path class="i04io93ly"/></g>`,
		"fallback": "uix-sharp:match-report",
	});
}

export default Component;
