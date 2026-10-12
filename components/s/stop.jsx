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
		"content": `<style>.dx9bz-bgp {
  width: 14.5px;
  height: 14.5px;
  x: 4.75px;
  y: 4.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 3px;
}
</style><rect class="dx9bz-bgp"/>`,
		"fallback": "iconoven:stop",
	});
}

export default Component;
