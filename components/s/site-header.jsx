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
		"content": `<style>.oeucrxbku {
  d: path("M3.5 2.5h17v19h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z46iwr9jz {
  fill: currentColor;
  d: path("M3.5 8V4.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2V8Z");
}

.zr08r8a0n {
  d: path("M7 13h10M7 17h6");
}
</style><g class="ulnmmdpxh"><path class="oeucrxbku"/><path class="z46iwr9jz"/><path class="zr08r8a0n"/></g>`,
		"fallback": "uix-sharp:site-header",
	});
}

export default Component;
