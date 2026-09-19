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
		"content": `<style>.dgwrkci2h {
  fill: currentColor;
  d: path("M22 17h-3v-2h1V9H4v6h6v2H2V7h20zm-7.5 2l1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09zm2.5-5l.62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62z");
}
</style><path class="dgwrkci2h"/>`,
		"fallback": "ic:sharp-smart-button",
	});
}

export default Component;
