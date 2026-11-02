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
		"content": `<style>.quwjrz4se {
  fill: currentColor;
  d: path("M21.34 14.153A4.5 4.5 0 0 1 17.5 21h-11a4.5 4.5 0 0 1-3.84-6.847l5.5-9a4.502 4.502 0 0 1 7.68 0Z");
}
</style><path class="quwjrz4se"/>`,
		"fallback": "coolicons:triangle-fill-round",
	});
}

export default Component;
