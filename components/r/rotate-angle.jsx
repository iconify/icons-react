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
		"content": `<style>.rg6tiacqz {
  d: path("M20.5 19H4L15.5 6");
}

.udtp34b-o {
  d: path("M9.353 13.055A8 8 0 0 1 12 19m4.75-9.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rg6tiacqz"/><path class="udtp34b-o"/></g>`,
		"fallback": "uix-sharp:rotate-angle",
	});
}

export default Component;
