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
		"content": `<style>.hahw6ebxv {
  fill: currentColor;
  d: path("M5.75 4A1.75 1.75 0 0 0 4 5.75V9a1 1 0 0 1-2 0V5.75A3.75 3.75 0 0 1 5.75 2H9a1 1 0 0 1 0 2zm0 20A1.75 1.75 0 0 1 4 22.25V19a1 1 0 1 0-2 0v3.25A3.75 3.75 0 0 0 5.75 26H9a1 1 0 1 0 0-2zM24 5.75A1.75 1.75 0 0 0 22.25 4H19a1 1 0 1 1 0-2h3.25A3.75 3.75 0 0 1 26 5.75V9a1 1 0 1 1-2 0zM22.25 24A1.75 1.75 0 0 0 24 22.25V19a1 1 0 1 1 2 0v3.25A3.75 3.75 0 0 1 22.25 26H19a1 1 0 1 1 0-2zM8 9a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z");
}
</style><path class="hahw6ebxv"/>`,
		"fallback": "fluent:scan-text-28-filled",
	});
}

export default Component;
