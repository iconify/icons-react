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
		"content": `<style>.owy2rxb_w {
  d: path("M19 12a7 7 0 1 1-7-7");
}

.v0xwkvbcv {
  d: path("M12 8.5V12h3m1.42-4.42l1.06-1.06");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="owy2rxb_w"/><path class="v0xwkvbcv"/></g>`,
		"fallback": "iconoven:token-expire-sharp",
	});
}

export default Component;
