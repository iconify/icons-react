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
		"content": `<style>.bmgbl2bdc {
  d: path("M7 13a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm5-8.5h9.5");
}

.dhe-nqb-j {
  d: path("M3.5 13a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dhe-nqb-j"/><path class="bmgbl2bdc"/></g>`,
		"fallback": "uix-sharp:particle-accelerator",
	});
}

export default Component;
