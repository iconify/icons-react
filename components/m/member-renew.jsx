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
		"content": `<style>.i51q7xoqs {
  d: path("M5.25 10.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM12.5 9H18m-5.5 4h1.8m6.45 5.5A2.75 2.75 0 1 1 18 15.75");
}

.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yc5m5tzdr {
  d: path("M12.5 19.5h-10v-15h19v10.8");
}
</style><g class="ulnmmdpxh"><path class="yc5m5tzdr"/><path class="i51q7xoqs"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix-sharp:member-renew",
	});
}

export default Component;
