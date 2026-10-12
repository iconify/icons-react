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
		"content": `<style>.ar_sl9bhj {
  d: path("M3.25 21c0-3.5 2.8-6.25 6.25-6.25h1.63l1.52.8m7.17-.73l.86.86l.42.42l-.42.42l-4.01 4.01l-.42.42l-.59.09l-.82.12l-.59.09l.09-.59l.12-.82l.09-.59l.42-.42l4.01-4.01l.42-.42z");
}

.v2el3udsi {
  cx: 9.5px;
  cy: 7.5px;
  r: 3.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="v2el3udsi"/><path class="ar_sl9bhj"/></g>`,
		"fallback": "iconoven:profile-edit-sharp",
	});
}

export default Component;
