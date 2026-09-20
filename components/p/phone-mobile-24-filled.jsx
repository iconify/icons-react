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
		"content": `<style>.wm16k9uov {
  d: path("M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2h7.5zm-2.5 16h-2.5a.75.75 0 1 0 0 1.5h2.5a.75.75 0 1 0 0-1.5z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="wm16k9uov"/>`,
		"fallback": "fluent:phone-mobile-24-filled",
	});
}

export default Component;
