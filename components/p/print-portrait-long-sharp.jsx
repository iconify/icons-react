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
		"content": `<style>.dvkdxrbjn {
  fill: currentColor;
  d: path("M4 10V7h1V3.95L6.35 3L14 5.775V21.4l-1.35.95L5 19.575V17H4v-3h1v-4zm12 10V4.275L12.475 3H19v17z");
}
</style><path class="dvkdxrbjn"/>`,
		"fallback": "material-symbols:print-portrait-long-sharp",
	});
}

export default Component;
