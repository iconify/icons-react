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
		"content": `<style>.o0ng2bc4c {
  d: path("M8.75 5.25h2.5v7h-2.5Zm6.5 7.25h.01m-6.51 2.75h6.5v3.5h-6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yp9hm2bdi {
  d: path("M6 2.5h12v19H6Zm-3.5 19h19");
}
</style><g class="ulnmmdpxh"><path class="yp9hm2bdi"/><path class="o0ng2bc4c"/></g>`,
		"fallback": "uix-sharp:interview-room",
	});
}

export default Component;
