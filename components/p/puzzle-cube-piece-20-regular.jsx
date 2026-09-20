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
		"content": `<style>.mb__wibes {
  fill: currentColor;
  d: path("M12 8h4v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h6zm-8 6a2 2 0 0 0 2 2h1v-3H4zm4 2h3v-3H8zm4 0h1a2 2 0 0 0 2-2v-1h-3zm-8-4h3V9H4zm4 0h3V9H8zm4 0h3V9h-3zM6 5a2 2 0 0 0-2 2v1h3V5zm2 3h3V5H8zm7.371-6.526a1 1 0 0 1 1.338.069l1.752 1.752a1 1 0 0 1 0 1.414l-1.752 1.752a1 1 0 0 1-1.338.07l-.076-.07l-1.752-1.752a1 1 0 0 1 0-1.414l1.752-1.752zM14.25 4.002l1.752 1.752l1.752-1.752l-1.752-1.752z");
}
</style><path class="mb__wibes"/>`,
		"fallback": "fluent:puzzle-cube-piece-20-regular",
	});
}

export default Component;
