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
		"content": `<style>.bjg4at92y {
  d: path("M3 12.5h18v4H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xzleubksx {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-6-6L11.5 4l6 2.5m-2 2.5l2-2.5l2 2.5");
}
</style><g class="ulnmmdpxh"><path class="bjg4at92y"/><path class="xzleubksx"/></g>`,
		"fallback": "uix-sharp:mobile-manipulator",
	});
}

export default Component;
