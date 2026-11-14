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
		"content": `<style>.areq-7y_z {
  d: path("m4.5 7.5l1 3l3.25-1");
}

.t2v8j0b2e {
  d: path("M5.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm3 3.5l1 5.5L8 21m1.5-7.5l11-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t2v8j0b2e"/><path class="areq-7y_z"/></g>`,
		"fallback": "uix-sharp:kickboxing",
	});
}

export default Component;
