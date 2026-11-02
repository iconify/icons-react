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
		"content": `<style>.y25y4y1du {
  fill: currentColor;
  d: path("M7 16V8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1");
}
</style><path class="y25y4y1du"/>`,
		"fallback": "coolicons:square-small-fill-sharp",
	});
}

export default Component;
