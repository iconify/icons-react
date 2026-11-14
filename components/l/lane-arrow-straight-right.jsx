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
		"content": `<style>.dia4z7d4z {
  d: path("M9 21.5V3M4 8l5-5l5 5M9 20a5 5 0 0 1 5-5h6");
}

.s0216tidb {
  d: path("M16.5 11.5L20 15l-3.5 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dia4z7d4z"/><path class="s0216tidb"/></g>`,
		"fallback": "uix-sharp:lane-arrow-straight-right",
	});
}

export default Component;
