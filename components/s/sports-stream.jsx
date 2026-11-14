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
		"content": `<style>.a2agztb8h {
  d: path("m10 10l5.5 3.25L10 16.5Z");
}

.gzc-2r5ic {
  d: path("M2.5 6.5h19V20h-19Zm5.5-4l4 4l4-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gzc-2r5ic"/><path class="a2agztb8h"/></g>`,
		"fallback": "uix-sharp:sports-stream",
	});
}

export default Component;
