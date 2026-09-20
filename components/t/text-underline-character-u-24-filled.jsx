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
		"content": `<style>.zzsmmtegp {
  fill: currentColor;
  d: path("M9 5a1 1 0 0 0-2 0v6.5a5 5 0 0 0 10 0V5a1 1 0 1 0-2 0v6.5a3 3 0 1 1-6 0zM7 18a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z");
}
</style><path class="zzsmmtegp"/>`,
		"fallback": "fluent:text-underline-character-u-24-filled",
	});
}

export default Component;
