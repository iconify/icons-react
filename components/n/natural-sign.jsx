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
		"content": `<style>.n8y4vacjb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.75v14m7-9.5v14M8.5 9.5l7-2.25m-7 9.5l7-2.25");
}
</style><path class="n8y4vacjb"/>`,
		"fallback": "iconoven:natural-sign",
	});
}

export default Component;
