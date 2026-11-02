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
		"content": `<style>.iq9fffbnz {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm14 6H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2");
}
</style><path class="iq9fffbnz"/>`,
		"fallback": "coolicons:square-minus-fill",
	});
}

export default Component;
