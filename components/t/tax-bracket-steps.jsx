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
		"content": `<style>.xqnfgcbej {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.6 19.5H2.5v-5h5.25V9H13V3.5h5.25v9.15m-3.5 8.6l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="xqnfgcbej"/>`,
		"fallback": "uix-sharp:tax-bracket-steps",
	});
}

export default Component;
