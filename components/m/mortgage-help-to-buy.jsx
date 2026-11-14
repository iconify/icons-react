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
		"content": `<style>.t1lgv37hw {
  d: path("M11.36 20.5H4v-10l8-7l7.654 6.697");
}

.t4o0k0u_u {
  d: path("M16 7V4h2v4.75M14 21.5l3.75-7.75m-.5 7.75L21 13.75m-6 5.75h3.25m-2.25-2h3.25m-2.5-2H20");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t1lgv37hw"/><path class="t4o0k0u_u"/></g>`,
		"fallback": "uix-sharp:mortgage-help-to-buy",
	});
}

export default Component;
