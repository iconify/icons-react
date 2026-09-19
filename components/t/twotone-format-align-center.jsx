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
		"content": `<style>.tas-8mbbg {
  fill: currentColor;
  d: path("M3 3h18v2H3zm4 12h10v2H7zm0-8h10v2H7zm-4 4h18v2H3zm0 8h18v2H3z");
}
</style><path class="tas-8mbbg"/>`,
		"fallback": "ic:twotone-format-align-center",
	});
}

export default Component;
