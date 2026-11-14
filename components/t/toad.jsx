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
		"content": `<style>.b-hp4p7mt {
  d: path("M6 18c.5-2.5 5-3 6.5 0m4-8.5h.01M8.5 12.75h.01m3.49-1h.01");
}

.sanpakb1q {
  d: path("M3.5 18c0-7 5-9.5 10-9.5c.5-3.5 5.25-3.5 5.75.25c1.5.75 2.25 2.75 2.25 4.25S20 15.5 18 15.5V18Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sanpakb1q"/><path class="b-hp4p7mt"/></g>`,
		"fallback": "uix-sharp:toad",
	});
}

export default Component;
