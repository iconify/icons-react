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
		"content": `<style>.cc33240jl {
  fill: currentColor;
  d: path("M9 9H7a3 3 0 1 0 0 6h2a1 1 0 0 1 0 2H7A5 5 0 0 1 7 7h2a1 1 0 0 1 0 2m6-2h2a5 5 0 0 1 0 10h-2a1 1 0 0 1 0-2h2a3 3 0 1 0 0-6h-2a1 1 0 0 1 0-2m-7 4h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2");
}
</style><path class="cc33240jl"/>`,
		"fallback": "coolicons:link-horizontal-fill",
	});
}

export default Component;
