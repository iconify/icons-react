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
		"content": `<style>.j3a4yebvh {
  fill: currentColor;
  d: path("M4 6H2v16h16v-2H4zm18-4H6v16h16zm-3 9H9V9h10zm-4 4H9v-2h6zm4-8H9V5h10z");
}
</style><path class="j3a4yebvh"/>`,
		"fallback": "ic:sharp-library-books",
	});
}

export default Component;
