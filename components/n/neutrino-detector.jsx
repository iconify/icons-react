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
		"content": `<style>.h7vcilrjq {
  d: path("M6.5 5a5.5 2 0 1 0 11 0a5.5 2 0 1 0-11 0Z");
}

.t_e8cdpmr {
  d: path("M6.5 5v14a5.5 2 0 0 0 11 0V5M3 17.5l1.5-1m4.5-3l6-4m4.5-3l1.5-1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h7vcilrjq"/><path class="t_e8cdpmr"/></g>`,
		"fallback": "uix-sharp:neutrino-detector",
	});
}

export default Component;
