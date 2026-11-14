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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uxi556b3l {
  d: path("M5 4h14a2.5 2.5 0 0 1 2.5 2.5v11A2.5 2.5 0 0 1 19 20H5a2.5 2.5 0 0 1-2.5-2.5v-11A2.5 2.5 0 0 1 5 4Z");
}

.zb5bxxbox {
  d: path("M7.5 8q-1 2 0 4t0 4M12 8q-1 2 0 4t0 4m4.5-8q-1 2 0 4t0 4");
}
</style><g class="ulnmmdpxh"><path class="uxi556b3l"/><path class="zb5bxxbox"/></g>`,
		"fallback": "uix-sharp:stretch-marks",
	});
}

export default Component;
