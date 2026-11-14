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
		"content": `<style>.kfiu4t7ix {
  d: path("m11 7.5l2-4h6l2 4Zm7 7V18m0 3h.01");
}

.kg7uilhnr {
  d: path("M3 21h6m-3 0V8.5a5 5 0 0 1 5-5h2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kg7uilhnr"/><path class="kfiu4t7ix"/></g>`,
		"fallback": "uix-sharp:street-light-fault",
	});
}

export default Component;
