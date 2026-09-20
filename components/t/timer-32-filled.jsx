import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r62kszbud {
  fill: currentColor;
  d: path("M13 2a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm15 16c0 6.627-5.373 12-12 12S4 24.627 4 18S9.373 6 16 6s12 5.373 12 12m-11-6a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm8.293-5.707a1 1 0 0 1 1.414 0l2 2a1 1 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414");
}
</style><path class="r62kszbud"/>`,
		"fallback": "fluent:timer-32-filled",
	});
}

export default Component;
