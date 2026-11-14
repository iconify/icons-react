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
		"content": `<style>.fh-v-czyq {
  d: path("m10 13.5l-3-3a2.12 2.12 0 0 1 3-3a2.12 2.12 0 0 1 3 3Zm5 0h5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-2.5l-2 1.75V19.5H15a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5Z");
}

.gy2opsqnd {
  d: path("M10.7 17.5H2.5v-15h15v8.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gy2opsqnd"/><path class="fh-v-czyq"/></g>`,
		"fallback": "uix-sharp:social-media-manager",
	});
}

export default Component;
