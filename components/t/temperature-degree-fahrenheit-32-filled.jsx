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
		"content": `<style>.n6ggyys5j {
  fill: currentColor;
  d: path("M5.5 10a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M8 5a5 5 0 1 0 0 10A5 5 0 0 0 8 5m8.75 0c-.69 0-1.25.56-1.25 1.25v19.5a1.25 1.25 0 1 0 2.5 0V17h7.75a1.25 1.25 0 1 0 0-2.5H18v-7h8.75a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="n6ggyys5j"/>`,
		"fallback": "fluent:temperature-degree-fahrenheit-32-filled",
	});
}

export default Component;
