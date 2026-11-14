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
		"content": `<style>.nct7lub7f {
  d: path("M9 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vp5_5gw2q {
  d: path("M5.25 9.5a6.75 6.75 0 0 1 13.5 0m-15 0h3v5h-3Zm13.5 0h3v5h-3ZM4.5 21.5c0-2.25 3.25-3.5 7.5-3.5s7.5 1.25 7.5 3.5m-2.25-8Q16.5 15 14 15");
}
</style><g class="ulnmmdpxh"><path class="nct7lub7f"/><path class="vp5_5gw2q"/></g>`,
		"fallback": "uix-sharp:podcast-host",
	});
}

export default Component;
