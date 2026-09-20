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
		"content": `<style>.s_o7a0bow {
  fill: currentColor;
  d: path("M8.55 20h6.9l1-4h-8.9zm0 2q-.7 0-1.225-.425t-.7-1.1L5.5 16h13l-1.125 4.475q-.175.675-.7 1.1T15.45 22zM5 14h14v-2H5zm7-6q0-2.5 1.75-4.25T18 2q0 2.25-1.425 3.9T13 7.9V10h8v4q0 .825-.587 1.413T19 16H5q-.825 0-1.412-.587T3 14v-4h8V7.9q-2.15-.35-3.575-2T6 2q2.5 0 4.25 1.75T12 8");
}
</style><path class="s_o7a0bow"/>`,
		"fallback": "material-symbols:potted-plant-outline",
	});
}

export default Component;
