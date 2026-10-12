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
		"content": `<style>.av-s81rrd {
  d: path("M10.25 13.75v1.75h3.5v-1.75");
}

.j-3fcd2_q {
  d: path("M9.5 11.5h6l.07 1l.36 5.25l.07 1H8l.07-1l.36-5.25l.07-1z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ylfp87bnz {
  d: path("M2.75 19.75V10l1.36-.63l6.53-2.99L12 5.75l1.36.63l6.53 2.99l1.36.63v11.25H2.75z");
}
</style><g class="x2cwu0gfd"><path class="ylfp87bnz"/><path class="j-3fcd2_q"/><path class="av-s81rrd"/></g>`,
		"fallback": "iconoven:mall-sharp",
	});
}

export default Component;
