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
		"content": `<style>.h295s6bbh {
  d: path("M7.5 2h9a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z");
}

.htgr4yb4g {
  d: path("M10.5 12.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.th_az_64v {
  fill: currentColor;
  d: path("M9.75 6.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h295s6bbh"/><path class="th_az_64v"/><path class="htgr4yb4g"/></g>`,
		"fallback": "uix-sharp:traffic-light-red",
	});
}

export default Component;
