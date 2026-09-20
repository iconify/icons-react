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
		"content": `<style>.kg5ylpb0c {
  d: path("M8 16v3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w2_t-sslc {
  d: path("m8 16 -3 3h6");
}

.wloabnb9u {
  d: path("m8 16 9 -9 3 3 -9 9Z");
}
</style><g class="s0phu2bbs"><path class="wloabnb9u"/><path class="w2_t-sslc"/><path class="kg5ylpb0c"/></g>`,
		"fallback": "iconmind:pen-outline-bold",
	});
}

export default Component;
