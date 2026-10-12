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
		"content": `<style>.pezy1db_x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.37 17.26l1.01-6.52l.12-.74h5l.12.74l1.01 6.52l.12.74h-7.5zm.45-2.76l6.06-2m-5.13-7h4.5V10h-4.5zm-1 4.5h6.5M12 3v2.5m4.5 1L20.75 5M16.5 8.75l4.25 1.5M7.5 6.5L3.25 5M7.5 8.75l-4.25 1.5m-.5 11c1.25 0 1.25-.75 2.5-.75s1.25.75 2.5.75s1.25-.75 2.5-.75s1.25.75 2.5.75s1.25-.75 2.5-.75s1.25.75 2.5.75s1.25-.75 2.5-.75");
}
</style><path class="pezy1db_x"/>`,
		"fallback": "iconoven:lighthouse-marine-sharp",
	});
}

export default Component;
