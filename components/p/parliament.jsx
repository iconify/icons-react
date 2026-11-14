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
		"content": `<style>.zi_o_itrk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 11a5 5 0 0 1 10 0M5 20.5V11h14v9.5Zm-2 0h18M12 6V3.5M9 13.75v4m6-4v4");
}
</style><path class="zi_o_itrk"/>`,
		"fallback": "uix-sharp:parliament",
	});
}

export default Component;
