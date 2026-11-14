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
		"content": `<style>.u_f-ygbmh {
  d: path("M2 21.5v-19h20v19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vgtwf4b4i {
  d: path("M6 7.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM5 21.5v-4a3.5 3.5 0 0 1 7 0v4m3.25-9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-.5 9v-2.25a2.25 2.25 0 0 1 4.5 0v2.25");
}
</style><g class="ulnmmdpxh"><path class="u_f-ygbmh"/><path class="vgtwf4b4i"/></g>`,
		"fallback": "uix-sharp:parking-bay-family",
	});
}

export default Component;
