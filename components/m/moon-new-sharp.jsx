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
		"content": `<style>.s-q6e0b1m {
  cx: 10.5px;
  cy: 13.5px;
  r: 7.5px;
}

.sn-dgzbyt {
  d: path("M7.92 17.19a4.5 4.5 0 0 1 0-7.38M19 2.75l.27 1.98l1.98.27l-1.98.27L19 7.25l-.27-1.98L16.75 5l1.98-.27z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="s-q6e0b1m"/><path class="sn-dgzbyt"/></g>`,
		"fallback": "iconoven:moon-new-sharp",
	});
}

export default Component;
