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
		"content": `<style>.vkmz62b4k {
  fill: currentColor;
  d: path("M3 21h18v-2H3zm0-4h18v-2H3zm0-4h18v-2H3zm0-4h18V7H3zm0-6v2h18V3z");
}
</style><path class="vkmz62b4k"/>`,
		"fallback": "ic:sharp-format-align-justify",
	});
}

export default Component;
