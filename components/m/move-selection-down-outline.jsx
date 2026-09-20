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
		"content": `<style>.zv2hdmksd {
  fill: currentColor;
  d: path("M6 22V10h12v12zm2-2h8v-8H8zM6 8V6h2v2zm10 0V6h2v2zM6 4V2h2v2zm5 0V2h2v2zm5 0V2h2v2zm-4 12");
}
</style><path class="zv2hdmksd"/>`,
		"fallback": "material-symbols:move-selection-down-outline",
	});
}

export default Component;
