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
		"content": `<style>.cxv4rs3ov {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.5 14.5l11-11M2.861 19.018l5.657-5.657l2.121 2.121l-5.657 5.657ZM7.5 12.5l4 4");
}
</style><path class="cxv4rs3ov"/>`,
		"fallback": "uix-sharp:kendo-strike",
	});
}

export default Component;
