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
		"content": `<style>.gaxrdubvl {
  fill: currentColor;
  d: path("m244.46 108l-33.62-37.37a14 14 0 0 0-10.4-4.63H134V32a6 6 0 0 0-12 0v34H40a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h82v66a6 6 0 0 0 12 0v-66h66.44a14 14 0 0 0 10.4-4.63L244.46 116a6 6 0 0 0 0-8m-42.54 37.35a2 2 0 0 1-1.48.66H40a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h160.44a2 2 0 0 1 1.48.66l30 33.34Z");
}
</style><path class="gaxrdubvl"/>`,
		"fallback": "ph:signpost-light",
	});
}

export default Component;
