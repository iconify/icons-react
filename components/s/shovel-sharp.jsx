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
		"content": `<style>.sz_k0fb4h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.88 9.18l6.94 6.94l-2.92 2.92a4.9 4.9 0 0 1-6.94-6.94Zm3.47 3.47l5.29-5.29m.18-3.83l3.65 3.65m-1.82-1.83l-2.01 2.01");
}
</style><path class="sz_k0fb4h"/>`,
		"fallback": "iconoven:shovel-sharp",
	});
}

export default Component;
