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
		"content": `<style>.n7mh_8jed {
  d: path("M9.25 12L7 13.25L7.75 15L9 14.5v4h6v-4l1.25.5l.75-1.75L14.75 12c-.25.75-1.5 1.25-2.75 1.25s-2.5-.5-2.75-1.25Z");
}

.sa23nmb2h {
  d: path("M3.5 5h17v15.5h-17ZM8 3v4m8-4v4M3.5 10h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sa23nmb2h"/><path class="n7mh_8jed"/></g>`,
		"fallback": "uix-sharp:laundry-day",
	});
}

export default Component;
