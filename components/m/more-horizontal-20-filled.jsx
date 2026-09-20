import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oc53ydthm {
  fill: currentColor;
  d: path("M6.75 10a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0m5 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0M15 11.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5");
}
</style><path class="oc53ydthm"/>`,
		"fallback": "fluent:more-horizontal-20-filled",
	});
}

export default Component;
