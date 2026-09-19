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
		"content": `<style>.vg6h2rd1o {
  fill: currentColor;
  d: path("M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6z");
}
</style><path class="vg6h2rd1o"/>`,
		"fallback": "ic:outline-keyboard-arrow-left",
	});
}

export default Component;
