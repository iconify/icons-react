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
		"content": `<style>.hn6kmkgey {
  d: path("M5.5 10h5v4h-5Z");
}

.lk-0gvbbz {
  d: path("M5.5 8h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lk-0gvbbz"/><path class="hn6kmkgey"/></g>`,
		"fallback": "uix-sharp:switch-slide",
	});
}

export default Component;
