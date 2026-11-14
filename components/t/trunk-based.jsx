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
		"content": `<style>.o0f12hb3i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19M3.25 6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.5l4.75 4m4.25-1a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm.5 1.5L12 16");
}
</style><path class="o0f12hb3i"/>`,
		"fallback": "uix-sharp:trunk-based",
	});
}

export default Component;
