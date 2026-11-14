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
		"content": `<style>.jks-j8nup {
  d: path("M20 12a8 8 0 1 1-2.25-5.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zpb_sxbkz {
  d: path("M17.75 2.5v3.75H14");
}
</style><g class="ulnmmdpxh"><path class="jks-j8nup"/><path class="zpb_sxbkz"/></g>`,
		"fallback": "uix-sharp:test-retry",
	});
}

export default Component;
