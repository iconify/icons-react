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
		"content": `<style>.slzfhnwmp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 5.75a4.5 3 0 0 1 9 0Zm0 3h9v12.5h-9Zm0 4.25h9m-9 4h9M3.25 21.25h17.5");
}
</style><path class="slzfhnwmp"/>`,
		"fallback": "iconoven:silo-tower",
	});
}

export default Component;
