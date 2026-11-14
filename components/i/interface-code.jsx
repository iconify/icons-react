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
		"content": `<style>.sak8omb4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 6.5L3 12l4 5.5m10-11l4 5.5l-4 5.5m-7.5-8h5m-5 5h5");
}
</style><path class="sak8omb4d"/>`,
		"fallback": "uix:interface-code",
	});
}

export default Component;
