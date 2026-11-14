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
		"content": `<style>.csuu21bdu {
  d: path("M9 12.5h6v5H9Zm1.5 0V11a1.5 1.5 0 0 1 3 0v1.5");
}

.ke58ybbzd {
  d: path("M3.5 10.5L12 3.25l8.5 7.25v10h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ke58ybbzd"/><path class="csuu21bdu"/></g>`,
		"fallback": "uix-sharp:safe-house",
	});
}

export default Component;
