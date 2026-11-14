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
		"content": `<style>.ffqz4qpwv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h6v4h-6Zm8.5 6h8.5v4H12Zm0 7h8.5v4H12Zm-5.5-9v11m0-7H12m-5.5 7H12");
}
</style><path class="ffqz4qpwv"/>`,
		"fallback": "uix-sharp:schema-tree",
	});
}

export default Component;
