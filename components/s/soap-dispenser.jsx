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
		"content": `<style>.g9pfrpbgp {
  d: path("M8 7.5h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yi5vz-vze {
  fill: currentColor;
  d: path("M9.5 17c1 1.25 1.75 2.25 1.75 3c0 1-.75 1.5-1.75 1.5S7.75 21 7.75 20c0-.75.75-1.75 1.75-3Z");
}

.yy7o8vb9h {
  d: path("M2.5 3H5v13H2.5ZM5 4h12v10H5Zm12 4.5h2.75c1 0 1.75.75 1.75 1.75V12m-12 2v1.5");
}
</style><g class="ulnmmdpxh"><path class="yy7o8vb9h"/><path class="yi5vz-vze"/><path class="g9pfrpbgp"/></g>`,
		"fallback": "uix-sharp:soap-dispenser",
	});
}

export default Component;
