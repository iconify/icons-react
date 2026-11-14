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
		"content": `<style>.e2h5sfmdq {
  d: path("M5.5 13.5a6.5 2 0 0 0 13 0");
}

.iwxixcb3y {
  d: path("M5.5 8a6.5 2 0 1 0 13 0a6.5 2 0 1 0-13 0Z");
}

.mcoaarhzv {
  d: path("M5.5 8v11.5a6.5 2 0 0 0 13 0V8M7 6.75A2.75 2.75 0 0 1 12 6a2.75 2.75 0 0 1 5 .75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iwxixcb3y"/><path class="mcoaarhzv"/><path class="e2h5sfmdq"/></g>`,
		"fallback": "uix-sharp:tennis-ball-can",
	});
}

export default Component;
