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
		"content": `<style>.vbm2u_bkj {
  fill: currentColor;
  d: path("M14.885 19V5H20v14zM11.5 21v-2H4V5h7.5V3h1v18z");
}
</style><path class="vbm2u_bkj"/>`,
		"fallback": "material-symbols-light:split-scene-left-sharp",
	});
}

export default Component;
