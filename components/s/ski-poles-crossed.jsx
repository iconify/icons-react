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
		"content": `<style>.x-8w25b3c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 20.5l11-14m2 14l-11-14m10.203-4.447L20.067 3.9l-2.77 3.547L14.933 5.6ZM3.933 3.9l2.364-1.847L9.067 5.6L6.703 7.447ZM5.5 17.25l3 2.5m10-2.5l-3 2.5");
}
</style><path class="x-8w25b3c"/>`,
		"fallback": "uix-sharp:ski-poles-crossed",
	});
}

export default Component;
