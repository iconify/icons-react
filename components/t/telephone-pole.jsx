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
		"content": `<style>.x1u-rfbxy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19m-7.5-15h15M6.5 11h11M6 6.5v-2m3 2v-2m6 2v-2m3 2v-2");
}
</style><path class="x1u-rfbxy"/>`,
		"fallback": "uix-sharp:telephone-pole",
	});
}

export default Component;
