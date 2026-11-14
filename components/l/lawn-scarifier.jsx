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
		"content": `<style>.bnhtcjodd {
  d: path("M6.5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6.5-2l1.5 4l1.5-4l1.5 4l1.5-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.viay5lohm {
  d: path("M6 10h14v6H6Zm1.5 0L4 3");
}
</style><g class="ulnmmdpxh"><path class="viay5lohm"/><path class="bnhtcjodd"/></g>`,
		"fallback": "uix-sharp:lawn-scarifier",
	});
}

export default Component;
