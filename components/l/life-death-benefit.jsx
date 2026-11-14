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
		"content": `<style>.scgvdhw-l {
  d: path("M10.5 17a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v82dfe_ny {
  d: path("m12 12.5l-5.25-5A3 3 0 0 1 12 4.25a3 3 0 0 1 5.25 3.25Zm-9.5 0h19v9h-19Z");
}
</style><g class="ulnmmdpxh"><path class="v82dfe_ny"/><path class="scgvdhw-l"/></g>`,
		"fallback": "uix-sharp:life-death-benefit",
	});
}

export default Component;
