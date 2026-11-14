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
		"content": `<style>.b4t19zb2x {
  d: path("M7.5 15.5v-6l-3 4h4m.75-2.25a1.75 1.75 0 0 1 3.5 0c0 1.75-3.5 2.5-3.5 4.25h3.5M18 14l4 7.5h-8Zm0 3.25v1M18 20h.01");
}

.nev1jebdo {
  d: path("M11.1 21H2.5V3h19v11.7M6 6.75h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nev1jebdo"/><path class="b4t19zb2x"/></g>`,
		"fallback": "uix-sharp:kpi-alert",
	});
}

export default Component;
