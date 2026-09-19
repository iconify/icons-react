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
		"content": `<style>.ejsolib7l {
  fill: currentColor;
  d: path("M3 3h18v2H3z");
}
</style><path class="ejsolib7l"/>`,
		"fallback": "ic:sharp-maximize",
	});
}

export default Component;
