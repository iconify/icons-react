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
		"content": `<style>.k5tgsx4lb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h18.5v9.5H2.75zm4.75 0v9.5m4.5-9.5v9.5m4.5-9.5v9.5m-13 5.25h17M6.25 15.75L3.5 18.5l2.75 2.75m11.5-5.5l2.75 2.75l-2.75 2.75");
}
</style><path class="k5tgsx4lb"/>`,
		"fallback": "iconoven:long-context-sharp",
	});
}

export default Component;
