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
		"content": `<style>.txi5bepoz {
  d: path("m3.5 21l1-2.5H8L9 21Zm2.75-2.5V11l6.25-6.5l5 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wj6guebei {
  d: path("M15 11.5V9h5v2.5m-6 0h7v5h-7Zm-1 8h8.5");
}
</style><g class="ulnmmdpxh"><path class="txi5bepoz"/><path class="wj6guebei"/></g>`,
		"fallback": "uix-sharp:palletizing-robot",
	});
}

export default Component;
