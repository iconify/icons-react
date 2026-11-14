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
		"content": `<style>.x7zf32blg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l8.227 4.75v9.5L12 21.5l-8.227-4.75v-9.5ZM8.5 12h.01M12 12h.01m3.49 0h.01");
}
</style><path class="x7zf32blg"/>`,
		"fallback": "uix-sharp:task-queued",
	});
}

export default Component;
