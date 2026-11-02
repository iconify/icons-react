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
		"content": `<style>.nktdr8bdd {
  fill: currentColor;
  d: path("m9 11.586l3.293-3.293a1 1 0 0 1 1.414 0L20 14.586V11a1 1 0 0 1 2 0v6a.997.997 0 0 1-1 1h-6a1 1 0 0 1 0-2h3.586L13 10.414l-3.293 3.293a1 1 0 0 1-1.414 0l-6-6a.999.999 0 1 1 1.414-1.414Z");
}
</style><path class="nktdr8bdd"/>`,
		"fallback": "coolicons:trending-down-bulk-sharp",
	});
}

export default Component;
