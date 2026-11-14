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
		"content": `<style>.ayxlxvb9x {
  d: path("M5.5 12V6.5a1 1 0 0 1 1-1H12m-3.25 9.75v-5.5a1 1 0 0 1 1-1h5.5M12 12h6.5v6.5H12Z");
}

.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="ayxlxvb9x"/></g>`,
		"fallback": "uix-sharp:material-board",
	});
}

export default Component;
