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
		"content": `<style>.l_lolebqr {
  d: path("M8.5 5q-1.5 7 0 14m7-14q1.5 7 0 14M12 12h.01");
}

.lnjctw_uj {
  d: path("M5 6q7-2.5 14 0q2.5 6 0 12q-7 2.5-14 0q-2.5-6 0-12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lnjctw_uj"/><path class="l_lolebqr"/></g>`,
		"fallback": "uix-sharp:spirits-cask",
	});
}

export default Component;
