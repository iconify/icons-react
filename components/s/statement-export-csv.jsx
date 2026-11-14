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
		"content": `<style>.ejkj6th1k {
  d: path("M16.25 15.5h4.25v4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z34theb_m {
  d: path("M11.1 21H3V3h18v9.6M3 9h18M3 15h10.4M9 3v18m6-18v9.7m0 8.3l5.25-5.25");
}
</style><g class="ulnmmdpxh"><path class="z34theb_m"/><path class="ejkj6th1k"/></g>`,
		"fallback": "uix-sharp:statement-export-csv",
	});
}

export default Component;
