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
		"content": `<style>.yzt9ch-wm {
  fill: currentColor;
  d: path("M5 5V4h14v1z");
}
</style><path class="yzt9ch-wm"/>`,
		"fallback": "material-symbols-light:maximize-sharp",
	});
}

export default Component;
