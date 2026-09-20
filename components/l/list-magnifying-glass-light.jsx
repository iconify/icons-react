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
		"content": `<style>.jqbhxomll {
  fill: currentColor;
  d: path("M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m6 70h72a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m88 52H40a6 6 0 0 0 0 12h88a6 6 0 0 0 0-12m108.24 10.24a6 6 0 0 1-8.48 0l-21.49-21.48a38.06 38.06 0 1 1 8.49-8.49l21.48 21.49a6 6 0 0 1 0 8.48M184 170a26 26 0 1 0-26-26a26 26 0 0 0 26 26");
}
</style><path class="jqbhxomll"/>`,
		"fallback": "ph:list-magnifying-glass-light",
	});
}

export default Component;
