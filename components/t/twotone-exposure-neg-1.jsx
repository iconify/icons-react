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
		"content": `<style>.nos1pgduy {
  fill: currentColor;
  d: path("M19 18V5h-.3L14 6.7v1.7l3-1.02V18zM4 11h8v2H4z");
}
</style><path class="nos1pgduy"/>`,
		"fallback": "ic:twotone-exposure-neg-1",
	});
}

export default Component;
