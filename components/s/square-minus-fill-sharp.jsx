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
		"content": `<style>.c5stc7bfc {
  fill: currentColor;
  d: path("M2 21V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m14-10H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2");
}
</style><path class="c5stc7bfc"/>`,
		"fallback": "coolicons:square-minus-fill-sharp",
	});
}

export default Component;
