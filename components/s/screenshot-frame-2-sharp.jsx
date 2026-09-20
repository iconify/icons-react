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
		"content": `<style>.zw3cz61yj {
  fill: currentColor;
  d: path("M20 10V7h-3V5h5v5zM2 10V5h5v2H4v3zm15 9v-2h3v-3h2v5zM2 19v-5h2v3h3v2z");
}
</style><path class="zw3cz61yj"/>`,
		"fallback": "material-symbols:screenshot-frame-2-sharp",
	});
}

export default Component;
