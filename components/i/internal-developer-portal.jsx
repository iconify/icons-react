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
		"content": `<style>.a8z1id9_n {
  d: path("M7.5 5.75h3v3h-3Zm6 0h3v3h-3ZM7.5 11h3v3h-3Zm6 0h3v3h-3Z");
}

.kmj5eebni {
  d: path("M3 3h18v13.5H3Zm-.5 17h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kmj5eebni"/><path class="a8z1id9_n"/></g>`,
		"fallback": "uix-sharp:internal-developer-portal",
	});
}

export default Component;
