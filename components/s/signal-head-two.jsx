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
		"content": `<style>.brswkjbqa {
  d: path("M7.5 4.5h9v15h-9Z");
}

.r_m_3abxv {
  d: path("M10.5 8.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="brswkjbqa"/><path class="r_m_3abxv"/></g>`,
		"fallback": "uix-sharp:signal-head-two",
	});
}

export default Component;
