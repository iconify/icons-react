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
		"content": `<style>.g7h3jsbeu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m21.01 5.25l-1.67 1.67l-2.26-2.26l1.67-1.67a3.1 3.1 0 0 0-3.53 4.37L12.7 9.89l-.649.757l1.41 1.41l.649-.757l2.52-2.52a3.1 3.1 0 0 0 4.38-3.53ZM7.5 14.2h11.042l.408 2l.55 2.55a1.5 1.5 0 0 1-2.55 1.3L15.5 18.7h-7l-1.45 1.35a1.5 1.5 0 0 1-2.55-1.3l.55-2.55l.408-2z");
}
</style><path class="g7h3jsbeu"/>`,
		"fallback": "iconoven:mod-tool-sharp",
	});
}

export default Component;
