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
		"content": `<style>.cs27-ri9u {
  d: path("m10 3l2 1.75l-1.75 2");
}

.djmvh3f0o {
  d: path("M2.5 21.5V17H8v-4.5h5.5V8h6v13.5M16.75 3.25l.529 1.272l1.373.11l-1.046.896l.32 1.34l-1.176-.718l-1.176.718l.32-1.34l-1.046-.896l1.373-.11ZM4 14c0-5 3.5-8.5 8-9.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="djmvh3f0o"/><path class="cs27-ri9u"/></g>`,
		"fallback": "uix-sharp:promotion",
	});
}

export default Component;
