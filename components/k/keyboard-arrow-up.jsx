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
		"content": `<style>.wumpg3bps {
  fill: currentColor;
  d: path("m12 10.108l-4.6 4.6L6.692 14L12 8.692L17.308 14l-.708.708z");
}
</style><path class="wumpg3bps"/>`,
		"fallback": "material-symbols-light:keyboard-arrow-up",
	});
}

export default Component;
