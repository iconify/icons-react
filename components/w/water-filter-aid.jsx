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
		"content": `<style>.i59_s2bey {
  d: path("M4.5 2.5h15l-6 5.5v1.5h-3V8ZM5 13l1.5 8.5h11L19 13");
}

.oj0jdlbua {
  d: path("m12 12.25l1.75 3.25a2 2 0 1 1-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i59_s2bey"/><path class="oj0jdlbua"/></g>`,
		"fallback": "uix-sharp:water-filter-aid",
	});
}

export default Component;
