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
		"content": `<style>.ag1osrblu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 16L16 4l4 4L8 20m0 0H4v-4m7-11L9 7m10 6l-2 2m-4-8L9 3L3 9l4 4m10-2l4 4l-6 6l-4-4");
}
</style><path class="ag1osrblu"/>`,
		"fallback": "coolicons:pencil-ruler-sharp",
	});
}

export default Component;
