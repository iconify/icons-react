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
		"content": `<style>.du2tnkioy {
  d: path("M2.75 13.25L8.25 17l5.5-3.75m6.5-10.5v14h-4v-5l1.5 1.5");
}

.qw4x7ebul {
  d: path("M2.75 11.25h11v9.5h-11z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qw4x7ebul"/><path class="du2tnkioy"/></g>`,
		"fallback": "iconoven:phishing-sharp",
	});
}

export default Component;
