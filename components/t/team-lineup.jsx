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
		"content": `<style>.kq32axa3e {
  d: path("M8.5 2.5h7v3h-7Zm-.5 8h8m-8 4h8m-8 4h5");
}

.qpofv-b0o {
  d: path("M4.5 4h15v17.5h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qpofv-b0o"/><path class="kq32axa3e"/></g>`,
		"fallback": "uix-sharp:team-lineup",
	});
}

export default Component;
