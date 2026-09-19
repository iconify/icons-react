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
		"content": `<style>.xx3yybj1a {
  fill: currentColor;
  d: path("M17 4v18H7V4h3V2h4v2zm-2 2H9v4h6z");
}
</style><path class="xx3yybj1a"/>`,
		"fallback": "ic:sharp-battery-5-bar",
	});
}

export default Component;
