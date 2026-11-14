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
		"content": `<style>.qijx-fb9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4v14.5m-9.5.5a9.5 2.5 0 1 0 19 0a9.5 2.5 0 1 0-19 0ZM5 13a7 2 0 1 0 14 0a7 2 0 1 0-14 0Zm2.5-5.5a4.5 1.75 0 1 0 9 0a4.5 1.75 0 1 0-9 0Zm4.5-5h.01");
}
</style><path class="qijx-fb9a"/>`,
		"fallback": "uix-sharp:tiered-display",
	});
}

export default Component;
