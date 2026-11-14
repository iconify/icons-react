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
		"content": `<style>.hcwosebch {
  d: path("M4 9h16v8H4Zm3.5 0V3.5h9V9");
}

.p1tpbpb4s {
  d: path("M7.5 14h9v6.5h-9Zm2.5 3h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hcwosebch"/><path class="p1tpbpb4s"/></g>`,
		"fallback": "uix-sharp:travel-itinerary-printout",
	});
}

export default Component;
