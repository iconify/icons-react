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
		"content": `<style>.e5du9ebef {
  fill: currentColor;
  d: path("M2 7V5a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v2Zm20 0h-7V5a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3ZM2 9h7v3a3 3 0 1 0 6 0V9h7v3c0 5.523-4.477 10-10 10S2 17.523 2 12Z");
}
</style><path class="e5du9ebef"/>`,
		"fallback": "coolicons:magnet-fill-round",
	});
}

export default Component;
