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
		"content": `<style>.tbp2u_jop {
  fill: currentColor;
  d: path("M11.98 20v-1H19V5h-7.02V4H20v16zm-.71-4.461l-.703-.72l2.32-2.319H4v-1h8.887l-2.32-2.32l.702-.718L14.808 12z");
}
</style><path class="tbp2u_jop"/>`,
		"fallback": "material-symbols-light:login-outline-sharp",
	});
}

export default Component;
