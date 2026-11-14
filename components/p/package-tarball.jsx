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
		"content": `<style>.bw0pajw5r {
  d: path("M4 8.5v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-10m-10.5 4h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ycm3w5rua {
  fill: currentColor;
  d: path("M2.5 3.5h19v5h-19Z");
}
</style><g class="ulnmmdpxh"><path class="ycm3w5rua"/><path class="bw0pajw5r"/></g>`,
		"fallback": "uix-sharp:package-tarball",
	});
}

export default Component;
