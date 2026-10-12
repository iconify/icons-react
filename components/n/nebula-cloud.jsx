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
		"content": `<style>.hhxfk1bfn {
  d: path("M6.25 19.5a3.5 3.5 0 1 1 .88-6.89a5 5 0 1 1 9.84-.57a3.75 3.75 0 1 1 .53 7.46Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lwcffhmbs {
  d: path("M12.25 11.75q.27 1.98 2.25 2.25q-1.98.27-2.25 2.25Q11.98 14.27 10 14q1.98-.27 2.25-2.25");
}
</style><g class="hntgybcog"><path class="hhxfk1bfn"/><path class="lwcffhmbs"/></g>`,
		"fallback": "iconoven:nebula-cloud",
	});
}

export default Component;
