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
		"content": `<style>.d6aam1rah {
  d: path("M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x2g69xbdz {
  d: path("M9.007 20.222a8.75 8.75 0 0 1 0-16.444m5.986 0a8.75 8.75 0 0 1 0 16.444");
}
</style><g class="ulnmmdpxh"><path class="d6aam1rah"/><path class="x2g69xbdz"/></g>`,
		"fallback": "uix-sharp:nanoparticle",
	});
}

export default Component;
