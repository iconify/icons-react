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
		"content": `<style>.yhef3cc6i {
  fill: currentColor;
  d: path("M6 6h2v12H6zm3.5 6l8.5 6V6z");
}
</style><path class="yhef3cc6i"/>`,
		"fallback": "ic:sharp-skip-previous",
	});
}

export default Component;
