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
		"content": `<style>.nqv8g3jbu {
  fill: currentColor;
  d: path("M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3zm6 4h12v2H9zm0-8h12v2H9z");
}
</style><path class="nqv8g3jbu"/>`,
		"fallback": "ic:twotone-format-align-right",
	});
}

export default Component;
