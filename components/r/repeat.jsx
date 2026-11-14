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
		"content": `<style>.bif6xt-xx {
  d: path("m8 13.5l-3 3l3 3");
}

.dxt0xxvoj {
  d: path("m16 4.5l3 3l-3 3m3.5.5v2.5a3 3 0 0 1-3 3H5");
}

.tt2fo2bdk {
  d: path("M4.5 13v-2.5a3 3 0 0 1 3-3H19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tt2fo2bdk"/><path class="dxt0xxvoj"/><path class="bif6xt-xx"/></g>`,
		"fallback": "uix-sharp:repeat",
	});
}

export default Component;
