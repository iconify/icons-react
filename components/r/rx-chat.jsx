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
		"content": `<style>.ohopdhxeb {
  d: path("M15 13.5h5a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-2.5L15 21v-2a1 1 0 0 1-1-1v-3.5a1 1 0 0 1 1-1Z");
}

.szhq-h6jd {
  d: path("M11.9 20.5H3v-18h14v8.2M6.5 7H13m-6.5 4h6m-6 4H10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="szhq-h6jd"/><path class="ohopdhxeb"/></g>`,
		"fallback": "uix-sharp:rx-chat",
	});
}

export default Component;
