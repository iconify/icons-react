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
		"content": `<style>.y5ld2fbld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.75h13v10.5h-13zm4.25 0v10.5m2.75-10.5v10.5m2.75-10.5v10.5m5.75-9.75a6 6 0 0 1 0 9m2.49-.2l-2.49.2l.51-2.45");
}
</style><path class="y5ld2fbld"/>`,
		"fallback": "iconoven:manual-focus-sharp",
	});
}

export default Component;
