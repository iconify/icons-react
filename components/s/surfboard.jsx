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
		"content": `<style>.csoq33byk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.78 4.22c.17 5.13-5.84 11.14-10.61 15.56c-2.37 2.23-7.18-2.58-4.95-4.95C8.64 10.06 14.65 4.05 19.78 4.22M16.6 7.4l-8.84 8.84");
}
</style><path class="csoq33byk"/>`,
		"fallback": "iconoven:surfboard",
	});
}

export default Component;
