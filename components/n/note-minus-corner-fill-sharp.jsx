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
		"content": `<style>.w2l3s4bsz {
  fill: currentColor;
  d: path("M4 3h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m9 12h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><path class="w2l3s4bsz"/>`,
		"fallback": "coolicons:note-minus-corner-fill-sharp",
	});
}

export default Component;
