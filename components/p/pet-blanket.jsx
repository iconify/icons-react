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
		"content": `<style>.hza8bkwho {
  d: path("M15.65 12.75H2.5V3h17v9.7");
}

.j72sn9bdg {
  d: path("M2.5 9H12a3.5 3.5 0 0 0 3.5-3.5V3m.5 17a2.5 1.75 0 1 0 5 0a2.5 1.75 0 1 0-5 0Zm-.75-3.5h.01m3.24-1h.01m3.24 1h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hza8bkwho"/><path class="j72sn9bdg"/></g>`,
		"fallback": "uix-sharp:pet-blanket",
	});
}

export default Component;
