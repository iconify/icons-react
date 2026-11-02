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
		"content": `<style>.h356wee5d {
  fill: currentColor;
  d: path("M17.271 8a6.617 6.617 0 0 0-11.352 6.606a6.62 6.62 0 0 0 4.833 3.889a6.606 6.606 0 0 0 7.329-3.889a.999.999 0 1 1 1.838.788a8.613 8.613 0 0 1-14.011 2.698A8.615 8.615 0 0 1 18 5.817V3a1 1 0 0 1 2 0v6a.997.997 0 0 1-1 1h-6a1 1 0 0 1 0-2Z");
}
</style><path class="h356wee5d"/>`,
		"fallback": "coolicons:redo-fill",
	});
}

export default Component;
