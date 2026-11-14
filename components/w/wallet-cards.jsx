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
		"content": `<style>.a45fk9b8x {
  d: path("M21.5 13.5h-4a2.25 2.25 0 0 0 0 4.5h4m-17-8V4.5A1.5 1.5 0 0 1 6 3h8a1.5 1.5 0 0 1 1.5 1.5v2.25");
}

.aihgdz_iq {
  d: path("M2.5 10h19v11.5h-19Z");
}

.qfksddcpx {
  d: path("M9.5 10V8.25a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 1.5 1.5V10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aihgdz_iq"/><path class="a45fk9b8x"/><path class="qfksddcpx"/></g>`,
		"fallback": "uix-sharp:wallet-cards",
	});
}

export default Component;
