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
		"content": `<style>.uzetvobtu {
  fill: currentColor;
  d: path("M8.25 14a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0m8 0a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0M22 16.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5");
}
</style><path class="uzetvobtu"/>`,
		"fallback": "fluent:more-horizontal-28-regular",
	});
}

export default Component;
