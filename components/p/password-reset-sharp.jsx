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
		"content": `<style>.g4mmmtbbx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h18.5v7H2.75z");
}

.hqlfe-boa {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.5 4.75v3M16.76 13a5.5 5.5 0 1 1-9.52 0m-2.17.58L7.24 13l.58 2.17");
}

.jp2jwumlg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 6.25h.01m3.49 0h.01m3.49 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="g4mmmtbbx"/><path class="jp2jwumlg"/><path class="hqlfe-boa"/></g>`,
		"fallback": "iconoven:password-reset-sharp",
	});
}

export default Component;
