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
		"content": `<style>.yosv5obmy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h4.5v12.5l2.75 1.75v4.25H3Zm10 0h4.5v12.5l2.75 1.75v4.25H13ZM3 6.5h4.5m5.5 0h4.5");
}
</style><path class="yosv5obmy"/>`,
		"fallback": "uix-sharp:mudroom",
	});
}

export default Component;
