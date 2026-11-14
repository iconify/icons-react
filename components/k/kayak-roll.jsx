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
		"content": `<style>.fvr309zej {
  d: path("M5.75 12c2.75 3 9.75 3 12.5 0c-2.75-2-9.75-2-12.5 0Z");
}

.p9tq0zrti {
  d: path("M7.5 19.75a9 9 0 1 1 9 0");
}

.u-ec9j55s {
  d: path("m17.25 16.75l-.75 3l3 .75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fvr309zej"/><path class="p9tq0zrti"/><path class="u-ec9j55s"/></g>`,
		"fallback": "uix-sharp:kayak-roll",
	});
}

export default Component;
