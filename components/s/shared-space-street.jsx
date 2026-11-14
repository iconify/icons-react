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
		"content": `<style>.gzqtib_bg {
  d: path("M12.5 20a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4.75 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.h_ggvzt8y {
  d: path("M2.5 21.5h19M3 5.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-.5 16v-8.25a2.75 2.75 0 0 1 5.5 0v8.25m3-3V14l2-3.5h6.5l2 3.5v4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h_ggvzt8y"/><path class="gzqtib_bg"/></g>`,
		"fallback": "uix-sharp:shared-space-street",
	});
}

export default Component;
