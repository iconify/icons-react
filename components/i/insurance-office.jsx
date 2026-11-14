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
		"content": `<style>.a--81zb-d {
  d: path("M7 13.25a5 5 0 0 1 10 0Zm5 0v3.5a1.5 1.5 0 0 1-3 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v5bcdvbpf {
  d: path("M3.5 10L12 3l8.5 7v11h-17Z");
}
</style><g class="ulnmmdpxh"><path class="v5bcdvbpf"/><path class="a--81zb-d"/></g>`,
		"fallback": "uix-sharp:insurance-office",
	});
}

export default Component;
