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
		"content": `<style>.ffzadgbho {
  d: path("M3.75 18.25h3.5m9.5 0h3.5");
}

.juap84dhf {
  cx: 12px;
  cy: 18.25px;
  r: 2.25px;
}

.nm008x03r {
  d: path("M5 12.5a7 7 0 0 1 14 0m-2.25-2.25L19 12.5l2.25-2.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nm008x03r"/><circle class="juap84dhf"/><path class="ffzadgbho"/></g>`,
		"fallback": "iconoven:step-out-sharp",
	});
}

export default Component;
