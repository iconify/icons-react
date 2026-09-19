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
		"content": `<style>.hbos8gb4w {
  fill: currentColor;
  d: path("M3 3h18v2H3zm0 8h18v2H3zm0 8h18v2H3zm0-4h18v2H3zm0-8h18v2H3z");
}
</style><path class="hbos8gb4w"/>`,
		"fallback": "ic:twotone-format-align-justify",
	});
}

export default Component;
