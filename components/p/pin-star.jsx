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
		"content": `<style>.lf8ure4yw {
  d: path("m12 5l1.25 3.25l3.5.25l-2.5 2.25L15 14l-3-1.75L9 14l.75-3.25l-2.5-2.25l3.5-.25Z");
}

.qj17mbbnh {
  d: path("M12 22c-3.5-3-8-7-8-12a8 8 0 0 1 16 0c0 5-4.5 9-8 12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qj17mbbnh"/><path class="lf8ure4yw"/></g>`,
		"fallback": "uix-sharp:pin-star",
	});
}

export default Component;
