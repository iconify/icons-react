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
		"content": `<style>.c9qxs1b2r {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.25 14.75h.01");
}

.dh4k9kbmu {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.75 14.75h.01");
}

.gnls4cc8n {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 12.75h3.5M12.5 11.5l1.25 1.25L12.5 14m1.25 2.75h-3.5m1.25-1.25l-1.25 1.25L11.5 18");
}

.i96svzb0s {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 10.25h6v9h-6zm1.5 0V5h3v5.25");
}

.nnds8xbez {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.25 10.25h6v9h-6zm1.5 0V5h3v5.25");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="i96svzb0s"/><path class="dh4k9kbmu"/><path class="nnds8xbez"/><path class="c9qxs1b2r"/><path class="gnls4cc8n"/></g>`,
		"fallback": "iconoven:tls-handshake-sharp",
	});
}

export default Component;
