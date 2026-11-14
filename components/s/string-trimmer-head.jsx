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
		"content": `<style>.qlp2dabxx {
  d: path("M10 13.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm8 0c1.5 0 3 1 3.5 2.5M6 13.5c-1.5 0-3-1-3.5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zl24vkbix {
  d: path("M6 13.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0Zm6-6V3");
}
</style><g class="ulnmmdpxh"><path class="zl24vkbix"/><path class="qlp2dabxx"/></g>`,
		"fallback": "uix-sharp:string-trimmer-head",
	});
}

export default Component;
