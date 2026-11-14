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
		"content": `<style>.c28d-okej {
  d: path("M5.5 10.5H15V18H5.5Zm13 1h.01M18.5 15h.01");
}

.udnndlb4v {
  d: path("M2.5 7.5h19V21h-19Zm6-5l3.5 5l3.5-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="udnndlb4v"/><path class="c28d-okej"/></g>`,
		"fallback": "uix-sharp:retro-tv",
	});
}

export default Component;
