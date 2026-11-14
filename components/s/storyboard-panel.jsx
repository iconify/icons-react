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
		"content": `<style>.cifvedbbb {
  d: path("M3 3h18v12.5H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zaow9tbat {
  d: path("m6 12l3.5-3.5L12 11l2-2l4 3.5M3 18h18M3 21.25h11");
}
</style><g class="ulnmmdpxh"><path class="cifvedbbb"/><path class="zaow9tbat"/></g>`,
		"fallback": "uix-sharp:storyboard-panel",
	});
}

export default Component;
