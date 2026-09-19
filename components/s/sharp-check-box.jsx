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
		"content": `<style>.g6-9__5ga {
  fill: currentColor;
  d: path("M21 3H3v18h18zM10 17l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z");
}
</style><path class="g6-9__5ga"/>`,
		"fallback": "ic:sharp-check-box",
	});
}

export default Component;
