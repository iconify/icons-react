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
		"content": `<style>.d5p848ylk {
  d: path("m3.5 9.5l8.5-7l8.5 7V21h-17Z");
}

.idrit8bor {
  fill: currentColor;
  d: path("M8.5 16.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.nh1tkhicc {
  d: path("M12 16.5v-7m0 0l3.5 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d5p848ylk"/><path class="idrit8bor"/><path class="nh1tkhicc"/></g>`,
		"fallback": "uix-sharp:music-venue",
	});
}

export default Component;
