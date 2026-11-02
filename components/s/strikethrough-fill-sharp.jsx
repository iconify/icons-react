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
		"content": `<style>.wjsde67-c {
  fill: currentColor;
  d: path("M8.536 11H20a1 1 0 0 1 0 2h-2.343A6 6 0 0 1 7.2 18.6a1 1 0 0 1 .2-1.4a1 1 0 0 1 1.4.2a4.001 4.001 0 0 0 6.664-4.4H4a1 1 0 0 1 0-2h2.343A6 6 0 0 1 16.8 5.4a1 1 0 0 1 .06 1.109a.998.998 0 0 1-1.66.091A4 4 0 0 0 8.536 11");
}
</style><path class="wjsde67-c"/>`,
		"fallback": "coolicons:strikethrough-fill-sharp",
	});
}

export default Component;
