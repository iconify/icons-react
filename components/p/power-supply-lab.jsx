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

.lyqipwbjz {
  d: path("M5.5 8h6v4.5h-6Zm9 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM7 16h.01M10 16h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hn7tnnbwb"/><path class="lyqipwbjz"/></g>`,
		"fallback": "uix-sharp:power-supply-lab",
	});
}

export default Component;
