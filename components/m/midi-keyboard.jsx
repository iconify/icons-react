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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wcsvtubwr {
  d: path("M2.5 4.5h19v15h-19Zm0 5.5h19");
}

.wdeh8ccwf {
  d: path("M7.25 10v4.5h3V10m-1.5 4.5v5m5-9.5v4.5h3V10m-1.5 4.5v5M6.5 7.25h.01m3.49 0h.01");
}
</style><g class="ulnmmdpxh"><path class="wcsvtubwr"/><path class="wdeh8ccwf"/></g>`,
		"fallback": "uix-sharp:midi-keyboard",
	});
}

export default Component;
