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
		"content": `<style>.ijsh6izbn {
  fill: currentColor;
  d: path("M21 1H7v5h2V4h10v16H9v-2H7v5h14zM10.8 11V9.5C10.8 8.1 9.4 7 8 7S5.2 8.1 5.2 9.5V11H4v6h8v-6zm-1.3 0h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3z");
}
</style><path class="ijsh6izbn"/>`,
		"fallback": "ic:sharp-phonelink-lock",
	});
}

export default Component;
