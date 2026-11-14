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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vldkfxb_l {
  d: path("M2.5 3h19v10h-19ZM12 13v8.5");
}

.x7b92sbir {
  d: path("M5.75 6h3.5v4h-3.5Zm9 0h3.5v4h-3.5ZM12 6.75h.01M12 9.25h.01");
}
</style><g class="ulnmmdpxh"><path class="vldkfxb_l"/><path class="x7b92sbir"/></g>`,
		"fallback": "uix-sharp:ski-race-timer",
	});
}

export default Component;
