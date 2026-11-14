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
		"content": `<style>.efz-9di1o {
  d: path("m15 18.5l3 3l3-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vnxnuacte {
  d: path("M14.1 21.5H5v-19h13v9.2m-8-6.2h3m5 9v7");
}
</style><g class="ulnmmdpxh"><path class="vnxnuacte"/><path class="efz-9di1o"/></g>`,
		"fallback": "uix-sharp:phone-down",
	});
}

export default Component;
