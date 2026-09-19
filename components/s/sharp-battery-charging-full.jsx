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
		"content": `<style>.pgetemsit {
  fill: currentColor;
  d: path("M17 4h-3V2h-4v2H7v18h10zm-6 16v-5.5H9L13 7v5.5h2z");
}
</style><path class="pgetemsit"/>`,
		"fallback": "ic:sharp-battery-charging-full",
	});
}

export default Component;
