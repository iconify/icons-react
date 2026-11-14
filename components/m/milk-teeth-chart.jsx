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
		"content": `<style>.l7u4hvbup {
  d: path("M3.5 3v17.5h10.1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uylff3kxq {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m-.5 10.75c-.75-1-3-1-3 1.25c0 1.5.5 2.25.75 3.25L17 21.5h.75l.75-1.75l.75 1.75H20l.75-1.75c.25-1 .75-1.75.75-3.25c0-2.25-2.25-2.25-3-1.25Z");
}
</style><g class="ulnmmdpxh"><path class="l7u4hvbup"/><path class="uylff3kxq"/></g>`,
		"fallback": "uix-sharp:milk-teeth-chart",
	});
}

export default Component;
