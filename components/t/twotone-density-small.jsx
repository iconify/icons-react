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
		"content": `<style>.bv4_abj-g {
  fill: currentColor;
  d: path("M3 2h18v2H3zm0 18h18v2H3zm0-6h18v2H3zm0-6h18v2H3z");
}
</style><path class="bv4_abj-g"/>`,
		"fallback": "ic:twotone-density-small",
	});
}

export default Component;
