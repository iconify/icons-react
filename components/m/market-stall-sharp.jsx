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
		"content": `<style>.aeh35cb5s {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.84 3.29l7.57 4.92l.84.54H2.75l.84-.54l7.57-4.92l.84-.54zM4.75 8.75V15m14.5-6.25V15m-14.5 2.75v3.5m14.5-3.5v3.5M2.75 15h18.5v2.75H2.75z");
}

.t3ln9qbwv {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.5 12h.01M12 12h.01m3.49 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="aeh35cb5s"/><path class="t3ln9qbwv"/></g>`,
		"fallback": "iconoven:market-stall-sharp",
	});
}

export default Component;
