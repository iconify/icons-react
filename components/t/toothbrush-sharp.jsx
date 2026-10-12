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
		"content": `<style>.qdy24598o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 15h18.5v4.25H2.75zm9.5-6.75h9V15h-9zm3 0V15m3-6.75V15");
}
</style><path class="qdy24598o"/>`,
		"fallback": "iconoven:toothbrush-sharp",
	});
}

export default Component;
