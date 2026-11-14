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
		"content": `<style>.kjouhj-xa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 10h10v11.5H7Zm3 0h4l-1.25-5.5h-1.5Zm2-5.5v-2m-2.5 13h5");
}
</style><path class="kjouhj-xa"/>`,
		"fallback": "uix-sharp:valve-oil",
	});
}

export default Component;
