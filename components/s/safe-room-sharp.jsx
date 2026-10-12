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
		"content": `<style>.tmtazmbsn {
  d: path("m3.92 9.31l6.91-5.62L12 2.75l1.17.94l6.91 5.62l1.17.94v11H2.75v-11z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yaok5yb_f {
  d: path("m12 9l3.75 1.35v3c0 2.4-1.5 4.1-3.75 5.15c-2.25-1.05-3.75-2.75-3.75-5.15v-3Z");
}
</style><g class="x2cwu0gfd"><path class="tmtazmbsn"/><path class="yaok5yb_f"/></g>`,
		"fallback": "iconoven:safe-room-sharp",
	});
}

export default Component;
