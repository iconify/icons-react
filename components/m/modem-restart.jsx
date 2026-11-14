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
		"content": `<style>.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.k52sc1brp {
  d: path("M12.5 19h-10v-8h13.8m.9 0h4.3v4.3M6.5 11l-2-6.5m13 6.5l2-6.5M6.5 15h.01m3.24 0h.01m10.99 3.5A2.75 2.75 0 1 1 18 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k52sc1brp"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix-sharp:modem-restart",
	});
}

export default Component;
