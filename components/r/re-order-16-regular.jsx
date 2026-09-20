import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mweid1b7w {
  fill: currentColor;
  d: path("M2.5 9h11a.5.5 0 0 1 .09.992L13.5 10h-11a.5.5 0 0 1-.09-.992zh11zm0-3h11a.5.5 0 0 1 .09.992L13.5 7h-11a.5.5 0 0 1-.09-.992zh11z");
}
</style><path class="mweid1b7w"/>`,
		"fallback": "fluent:re-order-16-regular",
	});
}

export default Component;
