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
		"content": `<style>.kzs3v1m6a {
  d: path("M6.5 13a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm4.5 0h.01M11 13l9-9m-1.5-1v2.5H21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yw-i7lbri {
  d: path("M2.5 13a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0Z");
}
</style><g class="ulnmmdpxh"><path class="yw-i7lbri"/><path class="kzs3v1m6a"/></g>`,
		"fallback": "uix-sharp:target-practice",
	});
}

export default Component;
