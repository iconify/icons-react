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
		"content": `<style>.gy7wuvjas {
  d: path("M12 7.5c0-1.75.5-3.25 1.75-4.5M12 10.25V17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.psyi6vpuq {
  d: path("M12 7.5c-1.75-2.75-7.75-3-7.75 2.5c0 3.75 2.75 5.75 5.25 7.75c1.25 1 2 2 2.5 3.5c.5-1.5 1.25-2.5 2.5-3.5c2.5-2 5.25-4 5.25-7.75c0-5.5-6-5.25-7.75-2.5");
}
</style><g class="hntgybcog"><path class="psyi6vpuq"/><path class="gy7wuvjas"/></g>`,
		"fallback": "iconoven:paan",
	});
}

export default Component;
