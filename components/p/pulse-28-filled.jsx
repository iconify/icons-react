import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wz2gizk3t {
  fill: currentColor;
  d: path("M10.035 3a1 1 0 0 1 .94.78l3.712 16.496l3.864-11.592a1 1 0 0 1 1.878-.055L22.177 13H25a1 1 0 1 1 0 2h-3.5a1 1 0 0 1-.928-.629l-.987-2.465l-4.136 12.41a1 1 0 0 1-1.925-.096L9.862 7.94l-1.904 6.347A1 1 0 0 1 7 15H3a1 1 0 1 1 0-2h3.256l2.786-9.287A1 1 0 0 1 10.035 3");
}
</style><path class="wz2gizk3t"/>`,
		"fallback": "fluent:pulse-28-filled",
	});
}

export default Component;
