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
		"content": `<style>.utfdj7bsp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5H5.5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2H12Zm0 0h6.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H12");
}
</style><path class="utfdj7bsp"/>`,
		"fallback": "uix:square-half",
	});
}

export default Component;
