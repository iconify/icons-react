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
		"content": `<style>.m1k14rbeg {
  fill: currentColor;
  d: path("M4 22V2h16v20zm3-11h3v-1h4v1h3V5H7zm0 2v6h10v-6zM6 4v16h12V4z");
}
</style><path class="m1k14rbeg"/>`,
		"fallback": "material-symbols:sensor-window-sharp",
	});
}

export default Component;
