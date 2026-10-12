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
		"content": `<style>.ivw4mms5a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.75v18.5m15-18.5v18.5m-16.75 0h18.5M4.5 4.25h15m-15 2.5h15v2.5h-15zm0 7h15v2.5h-15zm5 2.5v5m5-5v5m-5-2.5h5m-5-9.5v4.5m5-4.5v4.5m-5-2.25h5");
}
</style><path class="ivw4mms5a"/>`,
		"fallback": "iconoven:scaffolding-sharp",
	});
}

export default Component;
