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
		"content": `<style>.b1pgj34_r {
  d: path("M18.5 5.5a9 9 0 1 1-13 0");
}

.ttojhb41n {
  d: path("M7.75 12a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y90_y5blt {
  d: path("M3.25 5.5H5.5v2.25M8 10.5q4 2.75 8 0");
}
</style><g class="ulnmmdpxh"><path class="ttojhb41n"/><path class="b1pgj34_r"/><path class="y90_y5blt"/></g>`,
		"fallback": "uix-sharp:spin-shot",
	});
}

export default Component;
