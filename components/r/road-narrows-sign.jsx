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
		"content": `<style>.jn2xvdyup {
  d: path("M9 17.75v-2.5l1.5-2V11m4.5 6.75v-2.5l-1.5-2V11");
}

.tsuducbtn {
  d: path("m12 2.5l9.75 18H2.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tsuducbtn"/><path class="jn2xvdyup"/></g>`,
		"fallback": "uix-sharp:road-narrows-sign",
	});
}

export default Component;
