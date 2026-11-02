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
		"content": `<style>.y7wu9kboj {
  fill: currentColor;
  d: path("M3 5h11a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m0 5h11a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m12 4h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2M3 15h7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2");
}
</style><path class="y7wu9kboj"/>`,
		"fallback": "coolicons:list-minus-fill",
	});
}

export default Component;
