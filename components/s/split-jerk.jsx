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
		"content": `<style>.jmln-1bln {
  d: path("M10.25 8.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.onhvkmavh {
  d: path("M2.5 4h19M4 2v4m16-4v4M6.5 4l2 8.5h7l2-8.5M12 12.5V16m-7.5 5.5l3-4L12 16l7.5 5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="onhvkmavh"/><path class="jmln-1bln"/></g>`,
		"fallback": "uix-sharp:split-jerk",
	});
}

export default Component;
