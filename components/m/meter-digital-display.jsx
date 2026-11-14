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
		"content": `<style>.arw2ftbki {
  fill: currentColor;
  d: path("M10.75 16.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.m36tini-o {
  d: path("M5.25 6.25h13.5v6.5H5.25ZM8 9.5h2.5m2.75 0H16");
}

.o0uxpabcc {
  d: path("M2.5 3.5h19v17h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o0uxpabcc"/><path class="m36tini-o"/><path class="arw2ftbki"/></g>`,
		"fallback": "uix-sharp:meter-digital-display",
	});
}

export default Component;
