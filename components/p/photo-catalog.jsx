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
		"content": `<style>.hs4r6le7p {
  d: path("M8 6.25V3.5h13.5v11h-2.75M5.5 17.25l3.5-4l3.5 4m.25-4.75h.01");
}

.qb_u-9nqh {
  d: path("M5.25 9V6.25h13.5v11H16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.um2y76vkj {
  d: path("M2.5 9H16v11H2.5Z");
}
</style><g class="ulnmmdpxh"><path class="um2y76vkj"/><path class="qb_u-9nqh"/><path class="hs4r6le7p"/></g>`,
		"fallback": "uix-sharp:photo-catalog",
	});
}

export default Component;
