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
		"content": `<style>.mo2c33bvl {
  fill: currentColor;
  d: path("M5.5 14.5h11v-7h-11zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="mo2c33bvl"/>`,
		"fallback": "material-symbols-light:magnification-large-outline-sharp",
	});
}

export default Component;
