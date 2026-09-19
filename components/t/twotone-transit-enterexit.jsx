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
		"content": `<style>.uc__3tt6c {
  fill: currentColor;
  d: path("M15.98 6L9 12.77V8H6v10h10v-3h-4.85L18 8.03z");
}
</style><path class="uc__3tt6c"/>`,
		"fallback": "ic:twotone-transit-enterexit",
	});
}

export default Component;
