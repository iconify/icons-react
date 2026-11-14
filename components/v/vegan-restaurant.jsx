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
		"content": `<style>.ebhr9vvxh {
  d: path("M11.604 20.5H3V10l9-6.5l9 6.5v1.696");
}

.ka8ma1b1v {
  d: path("M6.5 14H11v6.5H6.5Zm8 7.5c0-4.5 2.5-7 7-7c0 4.5-2.5 7-7 7Zm0 0l4-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ebhr9vvxh"/><path class="ka8ma1b1v"/></g>`,
		"fallback": "uix-sharp:vegan-restaurant",
	});
}

export default Component;
