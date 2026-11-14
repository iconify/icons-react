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
		"content": `<style>.bx2mexb1z {
  d: path("M12.7 20.5H3.5v-18h13v8.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w-esv_mrh {
  d: path("m8.5 8.5l4 3l-4 3Zm7 5H21V21l-2.75-2l-2.75 2Z");
}
</style><g class="ulnmmdpxh"><path class="bx2mexb1z"/><path class="w-esv_mrh"/></g>`,
		"fallback": "uix-sharp:short-video-save",
	});
}

export default Component;
