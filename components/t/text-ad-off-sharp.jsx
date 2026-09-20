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
		"content": `<style>.woi38xiko {
  fill: currentColor;
  d: path("M21.104 22.53L17.573 19H3V5h2l1 1H4.573L1.881 3.308l.713-.714l19.223 19.223zM5.73 15.886h8.727l-1-1H5.73zm0-3.385h5.342l-1-1H5.731zm0-3.384h1.958l-1-1H5.73zM7.81 5H21v13.189L15.312 12.5h2.957v-1h-3.957l-2.385-2.384H14.5v-1h-3.573z");
}
</style><path class="woi38xiko"/>`,
		"fallback": "material-symbols-light:text-ad-off-sharp",
	});
}

export default Component;
