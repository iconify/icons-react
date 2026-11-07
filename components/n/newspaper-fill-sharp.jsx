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
		"content": `<style>.rnk78sbet {
  fill: currentColor;
  d: path("M8 3h13a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8ZM6 7v14H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Zm12 0h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m-6 4a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm6 4h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="rnk78sbet"/>`,
		"fallback": "coolicons:newspaper-fill-sharp",
	});
}

export default Component;
