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
		"content": `<style>.mgfzucbpu {
  d: path("M5.25 17.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9.5 2l2-4l2 4Zm-5-8.25L12 5.75L14.25 11m-3.5-2h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wky9r-s-h {
  d: path("M2.5 13H12v8.5H2.5Zm9.5 0h9.5v8.5H12ZM7.25 3.5h9.5V13h-9.5Z");
}
</style><g class="ulnmmdpxh"><path class="wky9r-s-h"/><path class="mgfzucbpu"/></g>`,
		"fallback": "uix-sharp:playroom",
	});
}

export default Component;
