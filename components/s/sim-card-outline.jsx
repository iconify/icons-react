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
		"content": `<style>.spdlzlbmg {
  fill: currentColor;
  d: path("M7 19h2v-2H7zm0-4h2v-4H7zm4 4h2v-4h-2zm0-6h2v-2h-2zm4 6h2v-2h-2zm0-4h2v-4h-2zm-9 7q-.825 0-1.412-.587T4 20V8l6-6h8q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm0-2h12V4h-7.15L6 8.85zm0 0h12z");
}
</style><path class="spdlzlbmg"/>`,
		"fallback": "material-symbols:sim-card-outline",
	});
}

export default Component;
