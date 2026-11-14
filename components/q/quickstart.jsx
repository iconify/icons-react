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
		"content": `<style>.raa5zfqob {
  d: path("m8 11.5l-3 3V18l3-2m8-4.5l3 3V18l-3-2m-5.25-7a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM12 19v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v3xqv1utn {
  d: path("M12 2c3.5 2.5 4.5 6.5 4 14H8c-.5-7.5.5-11.5 4-14Z");
}
</style><g class="ulnmmdpxh"><path class="v3xqv1utn"/><path class="raa5zfqob"/></g>`,
		"fallback": "uix-sharp:quickstart",
	});
}

export default Component;
