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
		"content": `<style>.mi4at6_ty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4.5h12l3.5 9.5h-19ZM5 14v5.5M19 14v5.5M2.75 9.25h18.5");
}
</style><path class="mi4at6_ty"/>`,
		"fallback": "uix-sharp:ping-pong-table",
	});
}

export default Component;
