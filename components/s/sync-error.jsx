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
		"content": `<style>.qnssq-bxq {
  d: path("M15 6.25h2.75V3.5M20 12a8 8 0 0 1-13.75 5.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wosba2btx {
  d: path("M9 17.75H6.25v2.75m3.25-11l5 5m0-5l-5 5");
}

.xtcd7qbnh {
  d: path("M4 12a8 8 0 0 1 13.75-5.75");
}
</style><g class="ulnmmdpxh"><path class="xtcd7qbnh"/><path class="qnssq-bxq"/><path class="wosba2btx"/></g>`,
		"fallback": "uix-sharp:sync-error",
	});
}

export default Component;
