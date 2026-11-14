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
		"content": `<style>.fpc2nnn1w {
  d: path("M4 4.5L8.5 10h7L20 4.5M12 10v5l-5.5 6m5.5-6l5.5 6");
}

.nuygbdb3o {
  d: path("M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nuygbdb3o"/><path class="fpc2nnn1w"/></g>`,
		"fallback": "uix-sharp:person-jumping",
	});
}

export default Component;
