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
		"content": `<style>.ztkyp5bld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7.5V3.25m3.18 5.57l3.01-3.01M16.5 12h4.25m-5.57 3.18l3.01 3.01M12 16.5v4.25m-3.18-5.57l-3.01 3.01M7.5 12H3.25m5.57-3.18L5.81 5.81");
}
</style><path class="ztkyp5bld"/>`,
		"fallback": "iconoven:spinner",
	});
}

export default Component;
