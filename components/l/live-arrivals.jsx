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
		"content": `<style>.dx5y55lqk {
  d: path("M16.941 6.916a2.75 2.75 0 0 1 0 5.168");
}

.ukfkd1b4b {
  d: path("M2.5 4h19v15.5h-19ZM6 8.5h4M6 13h12M6 16.5h9m1-7h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ukfkd1b4b"/><path class="dx5y55lqk"/></g>`,
		"fallback": "uix-sharp:live-arrivals",
	});
}

export default Component;
