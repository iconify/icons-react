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
		"content": `<style>.q3wixnhae {
  d: path("M3 7a2 2 0 0 1 2-2h4.5l2 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.za8fs0bnh {
  d: path("M9 15.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm3 0v-4.75l2.75.75");
}
</style><g class="ulnmmdpxh"><path class="q3wixnhae"/><path class="za8fs0bnh"/></g>`,
		"fallback": "uix-sharp:sheet-music-folder",
	});
}

export default Component;
