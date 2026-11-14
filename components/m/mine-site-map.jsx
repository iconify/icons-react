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
		"content": `<style>.emxb8yb2p {
  d: path("M2.5 5L12 3.5L21.5 5v15.5L12 19l-9.5 1.5ZM12 3.5V19m-9.5-5.75h19M7 4.5v15.25");
}

.o47n4rbsl {
  fill: currentColor;
  d: path("m15 10.5l1.75-3.25l1.75 3.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="emxb8yb2p"/><path class="o47n4rbsl"/></g>`,
		"fallback": "uix-sharp:mine-site-map",
	});
}

export default Component;
