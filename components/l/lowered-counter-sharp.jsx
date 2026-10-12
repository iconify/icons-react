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
		"content": `<style>.t1tmmoblw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.25h8.5v2.5h-8.5zm8.5 5h10v2.5h-10zm-6.5-2.5v11.5m14.5-6.5v6.5m-3-18.5v5.5m-2-2l2 2l2-2");
}
</style><path class="t1tmmoblw"/>`,
		"fallback": "iconoven:lowered-counter-sharp",
	});
}

export default Component;
