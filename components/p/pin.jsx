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
		"content": `<style>.rh--lnbae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 3.75h4.5v5.1l3.3 3.45c.6.65.15 1.7-.72 1.7H7.17c-.87 0-1.32-1.05-.72-1.7l3.3-3.45ZM12 14v6.5");
}
</style><path class="rh--lnbae"/>`,
		"fallback": "iconoven:pin",
	});
}

export default Component;
