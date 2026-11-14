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
		"content": `<style>.ozedijbje {
  d: path("m6.25 6.75l3.75 2v6.5l-3.75 2l-3.75-2v-6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vzmp2kb6b {
  d: path("m2.5 8.75l3.75 2l3.75-2m-3.75 2v6.5m6.5-5.25H17m-2-2l2 2l-2 2m2-4.25h4.5v4.5H17Z");
}
</style><g class="ulnmmdpxh"><path class="ozedijbje"/><path class="vzmp2kb6b"/></g>`,
		"fallback": "uix-sharp:model-serving",
	});
}

export default Component;
