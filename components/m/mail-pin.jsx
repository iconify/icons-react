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
		"content": `<style>.fo5wxzb9m {
  d: path("M13 16.5H2.5v-13h18v8.4");
}

.iq755xx-q {
  d: path("m2.5 6l9 5.5l9-5.5m-4.75 10.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM18 18.5v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fo5wxzb9m"/><path class="iq755xx-q"/></g>`,
		"fallback": "uix-sharp:mail-pin",
	});
}

export default Component;
