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
		"content": `<style>.pibs_-zxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.727 11.091l6.364-6.364l3.182 3.182l-6.364 6.364Zm6.523.159l8.25 8.25M2.5 18h9v3.5h-9Z");
}
</style><path class="pibs_-zxb"/>`,
		"fallback": "uix-sharp:service-ombudsman",
	});
}

export default Component;
