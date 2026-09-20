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
		"content": `<style>.ofnp9-zvi {
  fill: currentColor;
  d: path("M200 44a4 4 0 0 0 0 8a20 20 0 0 1 20 20v60H36V72a20 20 0 0 1 20-20a4 4 0 0 0 0-8a28 28 0 0 0-28 28v92a40 40 0 0 0 80 0v-24h40v24a40 40 0 0 0 80 0V72a28 28 0 0 0-28-28M36 164v-24h2.34l49.27 49.26A32 32 0 0 1 36 164m64 0a31.83 31.83 0 0 1-6.74 19.61L49.66 140H100Zm56 0v-24h2.34l49.27 49.26A32 32 0 0 1 156 164m57.26 19.61L169.66 140H220v24a31.83 31.83 0 0 1-6.74 19.61");
}
</style><path class="ofnp9-zvi"/>`,
		"fallback": "ph:sunglasses-thin",
	});
}

export default Component;
