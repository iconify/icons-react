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
		"content": `<style>.zozjmacgs {
  fill: currentColor;
  d: path("M26.278 3.138c1.617-.622 3.206.967 2.584 2.585l-8.46 21.994c-.696 1.812-3.306 1.668-3.8-.209l-2.375-9.023a1 1 0 0 0-.712-.712l-9.023-2.375c-1.877-.494-2.02-3.104-.209-3.8z");
}
</style><path class="zozjmacgs"/>`,
		"fallback": "fluent:location-arrow-32-filled",
	});
}

export default Component;
