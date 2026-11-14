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
		"content": `<style>.elrjfrbyj {
  d: path("M11 5v1.5c0 .85 1.55 1.5 3.5 1.5S18 7.35 18 6.5V5");
}

.os2pfya6p {
  d: path("m5.5 3.5l2 10h9m-7.75 0L6 18.25m9.5-4.75l2 5m3.501-1.881a15.5 15.5 0 0 1-18.002 0M11 5a3.5 1.5 0 1 0 7 0a3.5 1.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="os2pfya6p"/><path class="elrjfrbyj"/></g>`,
		"fallback": "uix-sharp:pension-contribution",
	});
}

export default Component;
