import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mhc7c_bym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.5 25.5l-17 6.921V25.5zm-37-3l17-6.921V22.5zm17 20l-6.921-17H22.5zm3-37l6.921 17H25.5z");
}
</style><path class="mhc7c_bym"/>`,
		"fallback": "arcticons:rakuten-ai",
	});
}

export default Component;
