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
		"content": `<style>.b5i9mibug {
  d: path("M6 12.5L3.5 15L6 17.5m12-5l2.5 2.5l-2.5 2.5m-15.5 3h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q44tqsqpm {
  d: path("M12 3v7.5Q12 15 7.5 15h-4m8.5-4.5q0 4.5 4.5 4.5h4");
}
</style><g class="hntgybcog"><path class="q44tqsqpm"/><path class="b5i9mibug"/></g>`,
		"fallback": "uix:microburst",
	});
}

export default Component;
