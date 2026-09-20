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
		"content": `<style>.brj1p7r3b {
  fill: currentColor;
  d: path("M8.5 30A4.5 4.5 0 0 1 4 25.5v-19A4.5 4.5 0 0 1 8.5 2h15A4.5 4.5 0 0 1 28 6.5v19a4.5 4.5 0 0 1-4.5 4.5z");
}
</style><path class="brj1p7r3b"/>`,
		"fallback": "fluent:rectangle-portrait-32-filled",
	});
}

export default Component;
