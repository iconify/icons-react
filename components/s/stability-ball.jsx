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
		"content": `<style>.k35p1dbvj {
  d: path("M3.5 11.5a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0Z");
}

.sm3uksbzq {
  d: path("M4.5 8c4.5 3 10.5 3 15 0M7 21.5h10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k35p1dbvj"/><path class="sm3uksbzq"/></g>`,
		"fallback": "uix-sharp:stability-ball",
	});
}

export default Component;
