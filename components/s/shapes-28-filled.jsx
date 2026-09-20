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
		"content": `<style>.msxundbas {
  fill: currentColor;
  d: path("M10 2a8 8 0 0 1 8 8h-3.25A4.75 4.75 0 0 0 10 14.75V18a8 8 0 1 1 0-16m1 12.75A3.75 3.75 0 0 1 14.75 11h7.5A3.75 3.75 0 0 1 26 14.75v7.5A3.75 3.75 0 0 1 22.25 26h-7.5A3.75 3.75 0 0 1 11 22.25z");
}
</style><path class="msxundbas"/>`,
		"fallback": "fluent:shapes-28-filled",
	});
}

export default Component;
