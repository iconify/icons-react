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
		"content": `<style>.m7av8glcy {
  d: path("M3.691 17.834L17.834 3.691l2.475 2.475L6.166 20.309Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xv5eb7bgy {
  d: path("m6.166 3.691l14.143 14.143l-2.475 2.475L3.691 6.166Z");
}
</style><g class="ulnmmdpxh"><path class="xv5eb7bgy"/><path class="m7av8glcy"/></g>`,
		"fallback": "uix-sharp:skier-fall",
	});
}

export default Component;
