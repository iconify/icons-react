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
		"content": `<style>.cor-ipb_c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 2.5l5.5 8h2l5.5-8m-12 10h11v9h-11Zm5.5-2v2M10 15h4m-5 3.5h6");
}
</style><path class="cor-ipb_c"/>`,
		"fallback": "uix-sharp:staff-lanyard",
	});
}

export default Component;
