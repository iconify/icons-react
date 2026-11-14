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
		"content": `<style>.shaky8bci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3.5h-1a2 2 0 0 0-2 2v4A2.5 2.5 0 0 1 3 12a2.5 2.5 0 0 1 2.5 2.5v4a2 2 0 0 0 2 2h1m7-17h1a2 2 0 0 1 2 2v4A2.5 2.5 0 0 0 21 12a2.5 2.5 0 0 0-2.5 2.5v4a2 2 0 0 1-2 2h-1M12 12h.01");
}
</style><path class="shaky8bci"/>`,
		"fallback": "uix-sharp:object-code",
	});
}

export default Component;
