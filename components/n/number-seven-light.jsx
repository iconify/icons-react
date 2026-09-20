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
		"content": `<style>.y88zu0agq {
  fill: currentColor;
  d: path("m173.75 49.72l-48 160a6 6 0 1 1-11.5-3.45L159.94 54H88a6 6 0 0 1 0-12h80a6 6 0 0 1 5.75 7.72");
}
</style><path class="y88zu0agq"/>`,
		"fallback": "ph:number-seven-light",
	});
}

export default Component;
