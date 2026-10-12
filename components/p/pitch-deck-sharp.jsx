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
		"content": `<style>.lwa569b5t {
  d: path("M2.75 8.75h15.5v10.5H2.75zm4 7.5v-2m3.75 2v-4m3.75 4v-5.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yermxkbpn {
  d: path("M6.25 5.25h15v10.5");
}
</style><g class="x2cwu0gfd"><path class="yermxkbpn"/><path class="lwa569b5t"/></g>`,
		"fallback": "iconoven:pitch-deck-sharp",
	});
}

export default Component;
