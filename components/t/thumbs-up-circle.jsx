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
		"content": `<style>.oc-gsdbwn {
  d: path("m9.5 11.5l2-3.5c.5-1 2-.75 1.75.5l-.25 2h2.75A1 1 0 0 1 17 11.75l-.75 3.75a1 1 0 0 1-1 1H9.5Zm-2.75.25v4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="oc-gsdbwn"/></g>`,
		"fallback": "uix-sharp:thumbs-up-circle",
	});
}

export default Component;
