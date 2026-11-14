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
		"content": `<style>.gknxd_b4j {
  d: path("m18 21.5l-2.5-2.75A1.75 1.75 0 1 1 18 16.5a1.75 1.75 0 1 1 2.5 2.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wsjhbwqgn {
  d: path("M13.2 20.5H4v-18h14V13M7 6.5h8m-8 4h4.5");
}
</style><g class="ulnmmdpxh"><path class="wsjhbwqgn"/><path class="gknxd_b4j"/></g>`,
		"fallback": "uix-sharp:magazine-heart",
	});
}

export default Component;
