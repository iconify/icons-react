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
		"content": `<style>.elcq_xlbi {
  d: path("M11.405 18.027q-.431.032-.905-.027l-.25 3.5H5V17c-.75-1.5-1.25-4-1-6c.25-1.5.75-2.5 1.5-2.5h3c1 0 1.5.5 1.75 1.5l.25 1c1.406.422 2.496 1.16 3.136 2.081M5.25 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m9 13.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m2.5-1h.01m2.49 0h.01");
}

.gl__jdt-i {
  d: path("M16.25 19.75q.75-.75 1.5 0t1.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="elcq_xlbi"/><path class="gl__jdt-i"/></g>`,
		"fallback": "uix:morning-sickness",
	});
}

export default Component;
