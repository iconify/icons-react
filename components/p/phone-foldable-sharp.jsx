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
		"content": `<style>.g6asczbvm {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.75 7.5h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.wq28wgbme {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.25h18.5v15.5H2.75zm9.25 0v15.5");
}
</style><g class="ux2u0rbkq"><path class="wq28wgbme"/><path class="g6asczbvm"/></g>`,
		"fallback": "iconoven:phone-foldable-sharp",
	});
}

export default Component;
