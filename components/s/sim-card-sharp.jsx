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
		"content": `<style>.vparo_b8x {
  fill: currentColor;
  d: path("M7 19h2v-2H7zm0-4h2v-4H7zm4 4h2v-4h-2zm0-6h2v-2h-2zm4 6h2v-2h-2zm0-4h2v-4h-2zM4 22V8l6-6h10v20z");
}
</style><path class="vparo_b8x"/>`,
		"fallback": "material-symbols:sim-card-sharp",
	});
}

export default Component;
