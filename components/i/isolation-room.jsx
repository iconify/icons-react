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
		"content": `<style>.n8jx9db8t {
  d: path("M2.5 21v-9c0-5.5 4.25-9 9.5-9s9.5 3.5 9.5 9v9m-15-9.5v8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yo4nnokus {
  d: path("M6.5 15.5H16c.85 0 1.5.65 1.5 1.5v2.5M8 12.75h3v1.5H8ZM2.5 21h19");
}
</style><g class="ulnmmdpxh"><path class="n8jx9db8t"/><path class="yo4nnokus"/></g>`,
		"fallback": "uix-sharp:isolation-room",
	});
}

export default Component;
