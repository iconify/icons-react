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
		"content": `<style>.ggf6z0ola {
  d: path("M15.672 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.68 0 3.203.351 4.431.977M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z6jdnsbzf {
  d: path("M18.5 13.5q0 3.5 3.5 3.5q-3.5 0-3.5 3.5q0-3.5-3.5-3.5q3.5 0 3.5-3.5Z");
}
</style><g class="ulnmmdpxh"><path class="ggf6z0ola"/><path class="z6jdnsbzf"/></g>`,
		"fallback": "uix-sharp:vfx-artist",
	});
}

export default Component;
