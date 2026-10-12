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
		"content": `<style>.g3z-wsbmh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 3.25h6.5l.37.93l2.76 6.89l.37.93H4.75l.37-.93l2.76-6.89l.37-.93zM12 12v8.75M8.25 21h7.5");
}
</style><path class="g3z-wsbmh"/>`,
		"fallback": "iconoven:lamp-off-sharp",
	});
}

export default Component;
