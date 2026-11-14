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
		"content": `<style>.cvwk54bwq {
  d: path("M12.2 19H2.5V5h19v9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x6iwf0bco {
  d: path("m3 6.5l9 6l9-6m-6 11h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><g class="ulnmmdpxh"><path class="cvwk54bwq"/><path class="x6iwf0bco"/></g>`,
		"fallback": "uix-sharp:service-secure-message",
	});
}

export default Component;
