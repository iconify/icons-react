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
		"content": `<style>.cogwfhb3q {
  fill: currentColor;
  d: path("M20 2H7v16h13zm-2 14H9V4h9zM3 15v-2h2v2zm0-5.5h2v2H3zM10 20h2v2h-2zm-7-1.5v-2h2v2zM5 22H3v-2h2zm3.5 0h-2v-2h2zm7 0h-2v-2h2zM3 6h2v2H3z");
}
</style><path class="cogwfhb3q"/>`,
		"fallback": "ic:sharp-copy-all",
	});
}

export default Component;
