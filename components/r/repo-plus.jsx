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
		"content": `<style>.ny9czrbtp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 8.5l2.5-5h11l2.5 5M12.2 19H3V8.5h16v3.7m-8-8.7v5m7 6.5v6m-3-3h6");
}
</style><path class="ny9czrbtp"/>`,
		"fallback": "uix-sharp:repo-plus",
	});
}

export default Component;
