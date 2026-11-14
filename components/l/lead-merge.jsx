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
		"content": `<style>.cmq_jdbll {
  d: path("M3.25 4.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm13 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.q1gvlsbzv {
  d: path("M5.5 6.75C5.5 9 12 8.25 12 10.5m6.5-3.75C18.5 9 12 8.25 12 10.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_-cq1qme {
  d: path("M9.25 13.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM6 21.5c0-1.75 2.75-2.75 6-2.75s6 1 6 2.75");
}
</style><g class="ulnmmdpxh"><path class="cmq_jdbll"/><path class="q1gvlsbzv"/><path class="v_-cq1qme"/></g>`,
		"fallback": "uix-sharp:lead-merge",
	});
}

export default Component;
