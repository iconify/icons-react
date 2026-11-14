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
		"content": `<style>.hg53u3q9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 6.5q1 6 7 7q-6 1-7 7q-1-6-7-7q6-1 7-7Zm8-3.5q.5 2.5 3 3q-2.5.5-3 3q-.5-2.5-3-3q2.5-.5 3-3Zm1 13q.5 2 2.5 2.5q-2 .5-2.5 2.5q-.5-2-2.5-2.5q2-.5 2.5-2.5Z");
}
</style><path class="hg53u3q9i"/>`,
		"fallback": "uix-sharp:particles-vfx",
	});
}

export default Component;
