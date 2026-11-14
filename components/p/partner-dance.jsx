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
		"content": `<style>.xh3vaxhtr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm13 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM12 6l-6 4v5l-2.5 6.5M6 15l2.5 6.5M12 6l6 4v5l-2.5 6.5M18 15l2.5 6.5");
}
</style><path class="xh3vaxhtr"/>`,
		"fallback": "uix-sharp:partner-dance",
	});
}

export default Component;
