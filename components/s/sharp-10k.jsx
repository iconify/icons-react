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
		"content": `<style>.eih77bujc {
  fill: currentColor;
  d: path("M10 10.5h1.5v3H10zM21 3H3v18h18zM7.5 15H6v-4.5H4.5V9h3zM13 9v6H8.5V9zm6 6h-1.75l-1.75-2.25V15H14V9h1.5v2.25L17.25 9H19l-2.25 3z");
}
</style><path class="eih77bujc"/>`,
		"fallback": "ic:sharp-10k",
	});
}

export default Component;
