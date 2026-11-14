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
		"content": `<style>.edb3zybbt {
  d: path("M2.5 21h19M3.5 4H9v17H3.5Zm0 3.5H9m2.75 6.5h7v7h-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x_pt-1xlh {
  d: path("M11.75 10.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}
</style><g class="ulnmmdpxh"><path class="edb3zybbt"/><path class="x_pt-1xlh"/></g>`,
		"fallback": "uix-sharp:toy-library",
	});
}

export default Component;
