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
		"content": `<style>.zuajlq8_a {
  fill: currentColor;
  d: path("M98 148a22 22 0 0 0-22-22a6 6 0 0 1-4.92-9.44L92.48 86H56a6 6 0 0 1 0-12h48a6 6 0 0 1 4.92 9.44l-22.53 32.18a34 34 0 1 1-34.68 56.17a6 6 0 0 1 8.58-8.39A22 22 0 0 0 98 148m62-74a54 54 0 0 1 0 108h-24a6 6 0 0 1-6-6V80a6 6 0 0 1 6-6Zm0 12h-18v84h18a42 42 0 0 0 0-84M32 54h192a6 6 0 0 0 0-12H32a6 6 0 0 0 0 12m192 148H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12");
}
</style><path class="zuajlq8_a"/>`,
		"fallback": "ph:three-d-light",
	});
}

export default Component;
