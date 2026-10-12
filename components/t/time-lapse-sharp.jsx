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
		"content": `<style>.wkicgpbhz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.81 2.79a9.3 9.3 0 0 1 3.1.83m1.4.8a9.3 9.3 0 0 1 2.27 2.27m.8 1.4a9.3 9.3 0 0 1 .83 3.1m0 1.62a9.3 9.3 0 0 1-.83 3.1m-.8 1.4a9.3 9.3 0 0 1-2.27 2.27m-1.4.8a9.3 9.3 0 0 1-3.1.83m-1.62 0a9.3 9.3 0 0 1-3.1-.83m-1.4-.8a9.3 9.3 0 0 1-2.27-2.27m-.8-1.4a9.3 9.3 0 0 1-.83-3.1m0-1.62a9.3 9.3 0 0 1 .83-3.1m.8-1.4a9.3 9.3 0 0 1 2.27-2.27m1.4-.8a9.3 9.3 0 0 1 3.1-.83M12 7.5V12l3 2");
}
</style><path class="wkicgpbhz"/>`,
		"fallback": "iconoven:time-lapse-sharp",
	});
}

export default Component;
