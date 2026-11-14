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
		"content": `<style>.xhk98xbgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.5 3v11.5A4.5 4.5 0 0 1 11 19H9m-4.5-2H9v4H4.5ZM14 3h3m-3.5 5h4");
}
</style><path class="xhk98xbgu"/>`,
		"fallback": "uix-sharp:snorkel-tube",
	});
}

export default Component;
