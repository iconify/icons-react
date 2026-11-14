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
		"content": `<style>.a98uvfvvo {
  d: path("M2.5 21v-9a9.5 9.5 0 0 1 19 0v9M2 21h20");
}

.lb0to798a {
  d: path("M7 21v-6.5a5 5 0 0 1 10 0V21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a98uvfvvo"/><path class="lb0to798a"/></g>`,
		"fallback": "uix-sharp:tunnel-sign",
	});
}

export default Component;
