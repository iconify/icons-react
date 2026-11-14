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
		"content": `<style>.xb-_z4b5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3v18M4 8h16m-3.5-3.5L20 8l-3.5 3.5M20 16H4m3.5-3.5L4 16l3.5 3.5");
}
</style><path class="xb-_z4b5z"/>`,
		"fallback": "uix:switch-sides",
	});
}

export default Component;
