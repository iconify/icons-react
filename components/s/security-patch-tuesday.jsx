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
		"content": `<style>.e8hdfoncf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 15h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yfxbac5_d {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.75v3m9-3v3M2.75 9h18.5m-5.89 3l-.36-.36q-1.06-1.06-2.12 0l-4.24 4.24q-1.06 1.06 0 2.12l.36.36q1.06 1.06 2.12 0l4.24-4.24q1.06-1.06 0-2.12");
}

.yz1t3jbri {
  width: 18.5px;
  height: 17px;
  x: 2.75px;
  y: 4.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}
</style><g class="y9tr6bcfx"><rect class="yz1t3jbri"/><path class="yfxbac5_d"/><path class="e8hdfoncf"/></g>`,
		"fallback": "iconoven:security-patch-tuesday",
	});
}

export default Component;
