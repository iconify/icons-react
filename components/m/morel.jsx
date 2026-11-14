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
		"content": `<style>.mqxpx2b3t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5C18.5 5 19 12 17.5 15h-11C5 12 5.5 5 12 2.5M9.5 15v6.5h5V15M10 7v5.5M14 7v5.5");
}
</style><path class="mqxpx2b3t"/>`,
		"fallback": "uix:morel",
	});
}

export default Component;
