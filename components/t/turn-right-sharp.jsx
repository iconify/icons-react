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
		"content": `<style>.ehg_xi53w {
  d: path("M5.25 20.25v-6.5a5 5 0 0 1 5-5h9.5");
}

.fdk2_9u8w {
  d: path("m15.75 4.75l4 4l-4 4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ehg_xi53w"/><path class="fdk2_9u8w"/></g>`,
		"fallback": "iconoven:turn-right-sharp",
	});
}

export default Component;
