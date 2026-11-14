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
		"content": `<style>.sh5ncvblv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 5.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM5.5 14.5c0-2 2.5-3.75 6.5-3.75s6.5 1.75 6.5 3.75m-16 2.75h19v4.25h-19Zm11.5 0v4.25");
}
</style><path class="sh5ncvblv"/>`,
		"fallback": "uix-sharp:person-workload",
	});
}

export default Component;
