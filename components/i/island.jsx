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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m5f5jugvz {
  d: path("M6 17q6-6 12 0Z");
}

.rbpkpjbyl {
  d: path("M12 14q1-5 0-7m0 0Q9 5.5 7 9m5-2q3-1.5 5 2m-5-2q-.5-2 1-3M2.75 21c1.54 0 1.54-1 3.08-1s1.54 1 3.08 1s1.54-1 3.08-1s1.54 1 3.08 1s1.54-1 3.08-1s1.54 1 3.08 1");
}
</style><g class="hntgybcog"><path class="m5f5jugvz"/><path class="rbpkpjbyl"/></g>`,
		"fallback": "iconoven:island",
	});
}

export default Component;
