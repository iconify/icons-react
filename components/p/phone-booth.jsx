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
		"content": `<style>.k6xjznxsv {
  d: path("M6 21.5v-15c0-2.5 2.75-4 6-4s6 1.5 6 4v15Zm0-15h12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vu1y9b9hn {
  d: path("M8.75 9.25h6.5v9.5h-6.5Zm3.25 0v9.5M8.75 14h6.5");
}
</style><g class="ulnmmdpxh"><path class="k6xjznxsv"/><path class="vu1y9b9hn"/></g>`,
		"fallback": "uix-sharp:phone-booth",
	});
}

export default Component;
