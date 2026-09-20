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
		"content": `<style>.i0oomndeo {
  fill: currentColor;
  d: path("M230 192a6 6 0 0 1-6 6h-63.06a13.92 13.92 0 0 1-12.52-7.74L96.84 87.11A2 2 0 0 0 95.06 86H32a6 6 0 0 1 0-12h63.06a13.92 13.92 0 0 1 12.52 7.74l51.58 103.15a2 2 0 0 0 1.78 1.11H224a6 6 0 0 1 6 6M152 86h72a6 6 0 0 0 0-12h-72a6 6 0 0 0 0 12");
}
</style><path class="i0oomndeo"/>`,
		"fallback": "ph:option-light",
	});
}

export default Component;
