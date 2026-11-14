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
		"content": `<style>.f18_f1p2j {
  d: path("M5.5 2.5h13v19h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uox3-lb0n {
  d: path("M8.5 11a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm3.5-1v2m-1.5 6.5h3");
}
</style><g class="ulnmmdpxh"><path class="f18_f1p2j"/><path class="uox3-lb0n"/></g>`,
		"fallback": "uix-sharp:phone-allowance",
	});
}

export default Component;
