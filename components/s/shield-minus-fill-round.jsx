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
		"content": `<style>.ed-kn0bym {
  fill: currentColor;
  d: path("M8 2h8a5 5 0 0 1 5 5v3c-.001 5.712-3.495 9.647-8.594 11.914a1 1 0 0 1-.812 0C6.495 19.647 3.001 15.712 3 10V7a5 5 0 0 1 5-5m1 8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z");
}
</style><path class="ed-kn0bym"/>`,
		"fallback": "coolicons:shield-minus-fill-round",
	});
}

export default Component;
