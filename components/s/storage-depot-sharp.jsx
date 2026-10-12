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
		"content": `<style>.u8ak2bb4b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13.5h8v7.75h-8zm10.5 0h8v7.75h-8zM8 5.75h8v7.75H8zm-2.5 10.5V19M8 16.25V19m8-2.75V19m2.5-2.75V19M10.75 8.25V11m2.5-2.75V11");
}
</style><path class="u8ak2bb4b"/>`,
		"fallback": "iconoven:storage-depot-sharp",
	});
}

export default Component;
