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
		"content": `<style>.hn7tnnbwb {
  d: path("M2.5 5h19v14h-19Z");
}

.q_09scb_s {
  d: path("M12 16.75c-2-2-3.5-3.75-3.5-5.5a3.5 3.5 0 0 1 7 0c0 1.75-1.5 3.5-3.5 5.5Zm0-5.5h.01m-6.76-3.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hn7tnnbwb"/><path class="q_09scb_s"/></g>`,
		"fallback": "uix-sharp:origin-label",
	});
}

export default Component;
