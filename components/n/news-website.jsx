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
		"content": `<style>.eimvhjb9w {
  d: path("M3.5 2.5H20a1 1 0 0 1 1 1V17a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1ZM2.5 7H21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zft4j5bcs {
  d: path("M6 10h5.5v4.5H6Zm8.25.5h3.25M14.25 15h3.25");
}
</style><g class="ulnmmdpxh"><path class="eimvhjb9w"/><path class="zft4j5bcs"/></g>`,
		"fallback": "uix-sharp:news-website",
	});
}

export default Component;
