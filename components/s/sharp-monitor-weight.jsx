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
		"content": `<style>.ec8llxlgh {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-6.8 8.2c-3.23 2.43-6.84-1.18-4.4-4.41c3.23-2.42 6.83 1.19 4.4 4.41");
}

.hnpre0bff {
  fill: currentColor;
  d: path("M10 8.5h1v1h-1zm1.5 0h1v1h-1zm1.5 0h1v1h-1z");
}
</style><path class="ec8llxlgh"/><path class="hnpre0bff"/>`,
		"fallback": "ic:sharp-monitor-weight",
	});
}

export default Component;
