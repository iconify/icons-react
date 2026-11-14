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
		"content": `<style>.igr_6ub-b {
  d: path("M12.3 21.5H5v-17h9v7.3M11.75 13h.01m7.616.574l2.3 2.3v3.252l-2.3 2.3h-3.252l-2.3-2.3v-3.252l2.3-2.3ZM17.75 15.75v3.5m-1-2.75l1-.75");
}

.uelfr323z {
  d: path("M3 21.5v-19h13v8.3M2.5 21.5H12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uelfr323z"/><path class="igr_6ub-b"/></g>`,
		"fallback": "uix-sharp:occupancy-limit-sign",
	});
}

export default Component;
