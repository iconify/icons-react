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
		"content": `<style>.lrby4_bmu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9V5.25H7m10 0h4.25V9m0 6v3.75H17m-10 0H2.75V15m3.93-.37l3.14-4.51l.43-.62l.46.59l1.58 2.07l.46.59l.49-.56l.77-.88l.49-.56l.44.61l2.37 3.28l.44.61H6.25z");
}
</style><path class="lrby4_bmu"/>`,
		"fallback": "iconoven:landscape-mode-sharp",
	});
}

export default Component;
