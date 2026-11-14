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
		"content": `<style>.a3ut4l7re {
  d: path("M10.5 8.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0ZM12 12l-8.5 8.5m2.25-2.25l2 2m.5-4.5l1.5 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zzn3338kt {
  d: path("M14 8.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm1.75 7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm1.75 1.75v4.25m0-2.25h1.75M17.5 21.5h1.75");
}
</style><g class="ulnmmdpxh"><path class="a3ut4l7re"/><path class="zzn3338kt"/></g>`,
		"fallback": "uix-sharp:sublease",
	});
}

export default Component;
