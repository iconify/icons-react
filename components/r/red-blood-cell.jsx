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
		"content": `<style>.omt08ib-v {
  d: path("M7.5 11a4.5 2 0 1 0 9 0a4.5 2 0 1 0-9 0ZM5 15.5c2 1.75 4.5 2.5 7 2.5");
}

.p24jq9byl {
  d: path("M2.5 12a9.5 6.75 0 1 0 19 0a9.5 6.75 0 1 0-19 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p24jq9byl"/><path class="omt08ib-v"/></g>`,
		"fallback": "uix-sharp:red-blood-cell",
	});
}

export default Component;
