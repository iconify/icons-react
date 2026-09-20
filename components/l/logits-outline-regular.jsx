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
		"content": `<style>.b2pxrbbhs {
  d: path("M11 5v13");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nu6kj0bjf {
  d: path("M16 11v7");
}

.ohbum8bmx {
  d: path("M6 8v10");
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="nrj6p8qat"><path class="ohbum8bmx"/><path class="b2pxrbbhs"/><path class="nu6kj0bjf"/><path class="xyj-l9cjp"/></g>`,
		"fallback": "iconmind:logits-outline-regular",
	});
}

export default Component;
