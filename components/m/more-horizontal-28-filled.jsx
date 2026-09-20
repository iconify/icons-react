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
		"content": `<style>.uad_kcc5b {
  fill: currentColor;
  d: path("M8.75 14a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0m8 0a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0M22 16.75a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5");
}
</style><path class="uad_kcc5b"/>`,
		"fallback": "fluent:more-horizontal-28-filled",
	});
}

export default Component;
