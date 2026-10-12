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
		"content": `<style>.s0747xbwl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 2.75h4l.07 1l.36 4.75l.07 1h-6l.07-1l.36-4.75l.07-1zm1.5 0V6m11-3.25h4l.07 1l.36 4.75l.07 1h-6l.07-1l.36-4.75l.07-1zm1.5 0V6M5.75 9.5V16c0 2.75 2 5.25 5 5.25m7.5-11.75V16c0 2.75-2 5.25-5 5.25");
}
</style><path class="s0747xbwl"/>`,
		"fallback": "iconoven:jumper-cables-sharp",
	});
}

export default Component;
