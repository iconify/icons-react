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
		"content": `<style>.kwk_xkbrn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.172 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.316 0 2.537.216 3.594.61M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm8 11q3.5-4 7 0q-3.5 4-7 0Zm.5 3.5l6-7");
}
</style><path class="kwk_xkbrn"/>`,
		"fallback": "uix-sharp:low-vision-person",
	});
}

export default Component;
