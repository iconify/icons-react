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
		"content": `<style>.z4-pn4mrt {
  fill: currentColor;
  d: path("M7 3h10a4 4 0 0 1 0 8H7a4 4 0 0 1 0-8m8 13a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z");
}
</style><path class="z4-pn4mrt"/>`,
		"fallback": "coolicons:row-minus-fill-round",
	});
}

export default Component;
