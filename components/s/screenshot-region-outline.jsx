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
		"content": `<style>.fiqyvsyri {
  fill: currentColor;
  d: path("M17 22v-3h-3v-2h3v-3h2v3h3v2h-3v3zM5 19v-5h2v3h3v2zm0-9V5h5v2H7v3zm12 0V7h-3V5h5v5z");
}
</style><path class="fiqyvsyri"/>`,
		"fallback": "material-symbols:screenshot-region-outline",
	});
}

export default Component;
