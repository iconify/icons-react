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
		"content": `<style>.aiii4rbwo {
  d: path("M6 12h3v3H6Zm9.5 9.5v-4h3v4");
}

.tefboslho {
  d: path("m2.5 9l5-5.5l5 5.5v12.5h-10Zm10 4L17 8.5l4.5 4.5v8.5h-9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tefboslho"/><path class="aiii4rbwo"/></g>`,
		"fallback": "uix-sharp:town",
	});
}

export default Component;
