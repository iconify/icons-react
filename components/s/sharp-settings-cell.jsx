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
		"content": `<style>.pcwe87b8j {
  fill: currentColor;
  d: path("M7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2zM6 0v20h12V0zm10 16H8V4h8z");
}
</style><path class="pcwe87b8j"/>`,
		"fallback": "ic:sharp-settings-cell",
	});
}

export default Component;
