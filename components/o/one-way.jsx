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
		"content": `<style>.jel3h_b-a {
  d: path("M2.5 3h19v10h-19ZM12 13v8M6.5 8h10.25");
}

.ujny1bbix {
  d: path("M14.5 5.75L16.75 8l-2.25 2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jel3h_b-a"/><path class="ujny1bbix"/></g>`,
		"fallback": "uix-sharp:one-way",
	});
}

export default Component;
