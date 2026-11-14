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
		"content": `<style>.wv4unxbyd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19v9h-19ZM5 10.5h14M7.5 16l-1 3.5M12 16v3.5m4.5-3.5l1 3.5");
}
</style><path class="wv4unxbyd"/>`,
		"fallback": "uix-sharp:split-ac-unit",
	});
}

export default Component;
