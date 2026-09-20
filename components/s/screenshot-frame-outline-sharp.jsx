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
		"content": `<style>.ul466sbtu {
  fill: currentColor;
  d: path("M5 7V2h5v2H7v3zm0 15v-5h2v3h3v2zM17 7V4h-3V2h5v5zm-3 15v-2h3v-3h2v5z");
}
</style><path class="ul466sbtu"/>`,
		"fallback": "material-symbols:screenshot-frame-outline-sharp",
	});
}

export default Component;
