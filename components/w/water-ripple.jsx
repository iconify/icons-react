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
		"content": `<style>.q4jdjlb3g {
  d: path("M2.5 16.5a9.5 4.5 0 0 0 19 0");
}

.t8ul-rb3l {
  d: path("M12 2.5S8.25 6.75 8.25 9.25a3.75 3.75 0 0 0 7.5 0C15.75 6.75 12 2.5 12 2.5ZM7 16.25a5 2 0 0 0 10 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t8ul-rb3l"/><path class="q4jdjlb3g"/></g>`,
		"fallback": "uix-sharp:water-ripple",
	});
}

export default Component;
