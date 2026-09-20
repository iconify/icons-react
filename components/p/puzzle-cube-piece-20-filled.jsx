import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.st37kbc6s {
  fill: currentColor;
  d: path("M7 17H6a3 3 0 0 1-3-3v-1h4zm4 0H8v-4h3zm5-3a3 3 0 0 1-3 3h-1v-4h4zm-9-2H3V9h4zm4 0H8V9h3zm5 0h-4V9h4zM7 8H3V7a3 3 0 0 1 3-3h1zm4 0H8V4h3zm4.371-6.526a1 1 0 0 1 1.338.069l1.752 1.752a1 1 0 0 1 0 1.414l-1.752 1.752a1 1 0 0 1-1.338.07l-.076-.07l-1.752-1.752a1 1 0 0 1 0-1.414l1.752-1.752z");
}
</style><path class="st37kbc6s"/>`,
		"fallback": "fluent:puzzle-cube-piece-20-filled",
	});
}

export default Component;
