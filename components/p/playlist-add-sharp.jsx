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
		"content": `<style>.wgbslzb_x {
  fill: currentColor;
  d: path("M3.5 15.5v-1h7v1zm0-4v-1h11v1zm0-4v-1h11v1zm13 12v-4h-4v-1h4v-4h1v4h4v1h-4v4z");
}
</style><path class="wgbslzb_x"/>`,
		"fallback": "material-symbols-light:playlist-add-sharp",
	});
}

export default Component;
