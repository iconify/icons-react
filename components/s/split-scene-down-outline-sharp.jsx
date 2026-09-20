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
		"content": `<style>.lppd0q3js {
  fill: currentColor;
  d: path("M5 9.116V4h14v5.116h-1V5H6v4.116zM5 20v-7.5H3v-1h18v1h-2V20zM6 5h12z");
}
</style><path class="lppd0q3js"/>`,
		"fallback": "material-symbols-light:split-scene-down-outline-sharp",
	});
}

export default Component;
