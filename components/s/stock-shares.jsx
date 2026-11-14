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
		"content": `<style>.fl7t-9b1e {
  d: path("M19 11a8 8 0 1 0-8 8v-8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.we7xd_b3v {
  d: path("M21.75 13.75a8 8 0 0 1-8 8v-8Z");
}
</style><g class="ulnmmdpxh"><path class="fl7t-9b1e"/><path class="we7xd_b3v"/></g>`,
		"fallback": "uix-sharp:stock-shares",
	});
}

export default Component;
