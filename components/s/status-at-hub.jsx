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
		"content": `<style>.dzk3e2bsz {
  d: path("M11.4 18H2.5V3H18v9.2M2.5 8H18");
}

.pak91mcph {
  d: path("M8.25 3v8h4V3M17 15h-2v6.5h2m2.5-6.5h2v6.5h-2m-5.25-3.25H22");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dzk3e2bsz"/><path class="pak91mcph"/></g>`,
		"fallback": "uix-sharp:status-at-hub",
	});
}

export default Component;
