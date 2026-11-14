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
		"content": `<style>.bw5fnkb2v {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4m-10.75 9c0-5 6.5 0 6.5-5");
}

.gsg0w-lwr {
  fill: currentColor;
  d: path("M7.5 16.25H10v2.5H7.5Zm6.5-5h2.5v2.5H14Z");
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
</style><g class="ulnmmdpxh"><path class="uwivq1yig"/><path class="bw5fnkb2v"/><path class="gsg0w-lwr"/></g>`,
		"fallback": "uix-sharp:svg-code",
	});
}

export default Component;
