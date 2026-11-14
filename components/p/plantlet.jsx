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
		"content": `<style>.x-7q9h8wa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 19.25V11m0 3c-4 0-7.5-2.5-7.5-7c4 0 7.5 2.5 7.5 7Zm0-3c0-4.5 3.5-7.5 7.5-7.5C19.5 8 16 11 12 11ZM5 21q7-3.5 14 0");
}
</style><path class="x-7q9h8wa"/>`,
		"fallback": "uix-sharp:plantlet",
	});
}

export default Component;
