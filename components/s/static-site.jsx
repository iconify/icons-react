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
		"content": `<style>.gu8wvuetu {
  d: path("M10.5 14.5a1.5 4.25 0 1 0 3 0a1.5 4.25 0 1 0-3 0Z");
}

.ic2qr0bgq {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4m-11.75 6a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm0 0h8.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwivq1yig {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5Z");
}
</style><g class="ulnmmdpxh"><path class="uwivq1yig"/><path class="ic2qr0bgq"/><path class="gu8wvuetu"/></g>`,
		"fallback": "uix-sharp:static-site",
	});
}

export default Component;
