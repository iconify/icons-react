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
		"content": `<style>.mqqi_jb7d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5V11M8.25 7.25L12 11l3.75-3.75M4 14.5h16M4 18h16M4 21.5h9");
}
</style><path class="mqqi_jb7d"/>`,
		"fallback": "uix:skip-to-content",
	});
}

export default Component;
