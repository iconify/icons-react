import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.si_704bnb {
  fill: currentColor;
  d: path("M228 192a12 12 0 0 1-24 0c0-77.2-62.8-140-140-140a12 12 0 0 1 0-24c90.43 0 164 73.57 164 164M64 100a12 12 0 0 0 0 24a68.07 68.07 0 0 1 68 68a12 12 0 0 0 24 0a92.1 92.1 0 0 0-92-92m4 72a16 16 0 1 0 16 16a16 16 0 0 0-16-16");
}
</style><path class="si_704bnb"/>`,
		"fallback": "ph:rss-simple-bold",
	});
}

export default Component;
