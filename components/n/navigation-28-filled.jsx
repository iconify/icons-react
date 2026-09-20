import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f1i96f3ay {
  fill: currentColor;
  d: path("M2.003 6a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2h-22a1 1 0 0 1-1-1M2 22a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1-9a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2z");
}
</style><path class="f1i96f3ay"/>`,
		"fallback": "fluent:navigation-28-filled",
	});
}

export default Component;
