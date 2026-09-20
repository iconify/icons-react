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
		"content": `<style>.xr5wwst9z {
  fill: currentColor;
  d: path("M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Z");
}
</style><path class="xr5wwst9z"/>`,
		"fallback": "ph:stop-thin",
	});
}

export default Component;
