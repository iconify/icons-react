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
		"content": `<style>.hjj7v0b2m {
  d: path("M6.25 4.75h11.5v16.5H6.25z");
}

.uup39gbiz {
  d: path("M8.25 7.5a8 8 0 0 0 7.5 0m-7 4.5h6.5m-6.5 3h6.5m-6.5 3h6.5m4-15.25l1.789.619l.211 1.881");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hjj7v0b2m"/><path class="uup39gbiz"/></g>`,
		"fallback": "iconoven:smart-speaker-sharp",
	});
}

export default Component;
