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
		"content": `<style>.po936wbwp {
  fill: currentColor;
  d: path("M3 21v-2h3v2zm0-4v-2h8v2zm0-4v-2h18v2zm0-4V7h8v2zm0-4V3h3v2zm5 16v-2h3v2zM8 5V3h3v2zm5 16v-2h3v2zm0-4v-2h8v2zm0-8V7h8v2zm0-4V3h3v2zm5 16v-2h3v2zm0-16V3h3v2z");
}
</style><path class="po936wbwp"/>`,
		"fallback": "material-symbols:key-visualizer-outline",
	});
}

export default Component;
