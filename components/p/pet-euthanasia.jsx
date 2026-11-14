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
		"content": `<style>.ybuirxg9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 17.5a5 3.5 0 1 0 10 0a5 3.5 0 1 0-10 0ZM7.25 9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm6 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-10.5 3.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm15 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM7.5 3.5a4.5 1.25 0 1 0 9 0a4.5 1.25 0 1 0-9 0Z");
}
</style><path class="ybuirxg9d"/>`,
		"fallback": "uix-sharp:pet-euthanasia",
	});
}

export default Component;
