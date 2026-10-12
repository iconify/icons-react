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
		"content": `<style>.gjbgv3vom {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 10.75a7 6.5 0 0 1 14 0");
}

.qst-dbwbd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10.75h16l.804-.002l-.054.802A8.75 8.75 0 0 1 16 18.7v2.55H8V18.7a8.75 8.75 0 0 1-4.75-7.15l-.054-.802z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.w9_pe4mbd {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 7.75h.01m4.99 0h.01");
}
</style><g class="ux2u0rbkq"><path class="qst-dbwbd"/><path class="gjbgv3vom"/><path class="w9_pe4mbd"/></g>`,
		"fallback": "iconoven:rice-bowl-sharp",
	});
}

export default Component;
