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
		"content": `<style>.adglo2bwc {
  d: path("M8 13.25a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.r89v_6xdl {
  d: path("M9.5 3.75a2.5 1.5 0 1 0 5 0a2.5 1.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uu_315b5i {
  d: path("M5 7.25a7 2 0 1 0 14 0a7 2 0 1 0-14 0Z");
}

.x9bwhdcqu {
  d: path("M4.5 19.25a7.5 2 0 1 0 15 0a7.5 2 0 1 0-15 0Z");
}
</style><g class="ulnmmdpxh"><path class="x9bwhdcqu"/><path class="adglo2bwc"/><path class="uu_315b5i"/><path class="r89v_6xdl"/></g>`,
		"fallback": "uix-sharp:rock-balance",
	});
}

export default Component;
