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
		"content": `<style>.dvuiobhfk {
  d: path("M6 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6-4v8m3-8v8m3-8v8");
}

.j6di7o7eh {
  d: path("M2.5 12L7 4.5h14.5v15H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j6di7o7eh"/><path class="dvuiobhfk"/></g>`,
		"fallback": "uix-sharp:tag-barcode",
	});
}

export default Component;
