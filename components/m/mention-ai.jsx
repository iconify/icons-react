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
		"content": `<style>.d_ug_ib6e {
  d: path("M13.5 10.5V15a2 2 0 0 0 4 0v-1.5a7 7 0 1 0-3.5 6M19 2q.5 2.5 3 3q-2.5.5-3 3q-.5-2.5-3-3q2.5-.5 3-3Z");
}

.lj9chqiwf {
  d: path("M7.5 13.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lj9chqiwf"/><path class="d_ug_ib6e"/></g>`,
		"fallback": "uix-sharp:mention-ai",
	});
}

export default Component;
