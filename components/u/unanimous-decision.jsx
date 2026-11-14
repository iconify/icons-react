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
		"content": `<style>.x2bct-mfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 6.5l3 3l7-7M7 12.5l3 3l7-7m-7.5 10l3 3l7-7");
}
</style><path class="x2bct-mfd"/>`,
		"fallback": "uix-sharp:unanimous-decision",
	});
}

export default Component;
