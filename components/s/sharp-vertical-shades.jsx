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
		"content": `<style>.yvc_kgbsu {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h20v-2zm-10 0V5h4v14z");
}
</style><path class="yvc_kgbsu"/>`,
		"fallback": "ic:sharp-vertical-shades",
	});
}

export default Component;
