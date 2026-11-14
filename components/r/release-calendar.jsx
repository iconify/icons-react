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
		"content": `<style>.dil5dmblp {
  d: path("M21.25 14c-3 0-5 2-6 4l2 2c2-1 4-3 4-6Zm-6 4l-1.75-.25L14.75 16m2.5 4l.25 1.75l1.75-1.25");
}

.ettnmt-yu {
  d: path("M14.3 21H3.5V4.5h17v6.7M8 2.5v4m8-4v4m-12.5 3h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ettnmt-yu"/><path class="dil5dmblp"/></g>`,
		"fallback": "uix-sharp:release-calendar",
	});
}

export default Component;
