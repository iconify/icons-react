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
		"content": `<style>.d_vcnnbnq {
  d: path("M4.5 4h13a2 2 0 0 1 2 2v5.5H14l-3 5v.5H4.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vx24qq72l {
  d: path("m6 7.5l5 3.5l5-3.5m.5 8.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-1.5 5.5c0-1.25 1.3-2 3-2s3 .75 3 2");
}
</style><g class="ulnmmdpxh"><path class="d_vcnnbnq"/><path class="vx24qq72l"/></g>`,
		"fallback": "uix-sharp:mail-user",
	});
}

export default Component;
