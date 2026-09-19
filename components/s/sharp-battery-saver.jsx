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
		"content": `<style>.xiokrfqwu {
  fill: currentColor;
  d: path("M17 4h-3V2h-4v2H7v18h10zm-2 10h-2v2h-2v-2H9v-2h2v-2h2v2h2z");
}
</style><path class="xiokrfqwu"/>`,
		"fallback": "ic:sharp-battery-saver",
	});
}

export default Component;
