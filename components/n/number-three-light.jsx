import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dr7u0qfey {
  fill: currentColor;
  d: path("M174 160a54 54 0 0 1-90 40.25a6 6 0 1 1 8-8.94A42 42 0 1 0 120 118a6 6 0 0 1-4.8-9.6L156 54H88a6 6 0 0 1 0-12h80a6 6 0 0 1 4.8 9.6l-41.67 55.55A54.1 54.1 0 0 1 174 160");
}
</style><path class="dr7u0qfey"/>`,
		"fallback": "ph:number-three-light",
	});
}

export default Component;
