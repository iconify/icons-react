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
		"content": `<style>.k3jm3gbbl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75h14.5v18.5H4.75zm3.5 0v18.5m3.25-13.5h4.25m-4.25 3.5h4.25m-4.25 3.5h4.25");
}
</style><path class="k3jm3gbbl"/>`,
		"fallback": "iconoven:ledger-sharp",
	});
}

export default Component;
