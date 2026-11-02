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
		"content": `<style>.xh7b0fb0z {
  fill: currentColor;
  d: path("M7 9v6a5 5 0 0 0 10 0V9A5 5 0 0 0 7 9m5 13h-.003A7 7 0 0 1 5 15V9a7 7 0 1 1 14 0v6a7 7 0 0 1-7 7");
}
</style><path class="xh7b0fb0z"/>`,
		"fallback": "coolicons:letter-o-bulk-round",
	});
}

export default Component;
