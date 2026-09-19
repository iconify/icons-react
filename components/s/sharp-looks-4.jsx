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
		"content": `<style>.nmr8znbzw {
  fill: currentColor;
  d: path("M21.04 3h-18v18h18zm-6 14h-2v-4h-4V7h2v4h2V7h2z");
}
</style><path class="nmr8znbzw"/>`,
		"fallback": "ic:sharp-looks-4",
	});
}

export default Component;
