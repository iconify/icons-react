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
		"content": `<style>.qucea9b_t {
  d: path("M7.5 11.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM7 17h4.5m4-1.5l5 5m0-5l-5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yssclacgq {
  d: path("M12.6 21.5H3.5v-16h13v7.1M8 5.5v-3h4v3");
}
</style><g class="ulnmmdpxh"><path class="yssclacgq"/><path class="qucea9b_t"/></g>`,
		"fallback": "uix-sharp:press-badge-x",
	});
}

export default Component;
