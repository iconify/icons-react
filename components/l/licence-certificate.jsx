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
		"content": `<style>.k-6hc50iq {
  d: path("M9 16a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.so6jrry8x {
  d: path("M6.2 16H2.5V3h19v13h-3.7M6.5 7.5h11M9.646 21.311l-.146.439m4.854-.439l.146.439");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="so6jrry8x"/><path class="k-6hc50iq"/></g>`,
		"fallback": "uix-sharp:licence-certificate",
	});
}

export default Component;
