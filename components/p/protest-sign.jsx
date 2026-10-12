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
		"content": `<style>.i780oo3eq {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 11.75h.01");
}

.iseisybnm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.54 4.3l11.93-1.25q1.99-.21 2.2 1.78l.57 5.47q.21 1.99-1.78 2.2L6.53 13.75q-1.99.21-2.2-1.78L3.76 6.5q-.21-1.99 1.78-2.2M12 13.25v8m0-15.5v3.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="iseisybnm"/><path class="i780oo3eq"/></g>`,
		"fallback": "iconoven:protest-sign",
	});
}

export default Component;
