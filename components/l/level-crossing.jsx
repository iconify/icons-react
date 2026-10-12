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
		"content": `<style>.zq8b8bafi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 5l13 8m0-8l-13 8M12 9v10.75m-2.25 0h4.5");
}
</style><path class="zq8b8bafi"/>`,
		"fallback": "iconoven:level-crossing",
	});
}

export default Component;
