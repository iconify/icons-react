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
		"content": `<style>.le7prpb1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 5.5h10v7H7Zm3 0V3h4v2.5m-11.5 7h19m-17 0v3m15-3v3m-11 0l1 5.5h6");
}
</style><path class="le7prpb1b"/>`,
		"fallback": "uix-sharp:luggage-rack-train",
	});
}

export default Component;
