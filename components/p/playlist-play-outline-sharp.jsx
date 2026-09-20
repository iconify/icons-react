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
		"content": `<style>.qvgtrdz5k {
  fill: currentColor;
  d: path("M4 15.77v-1h7.02v1zm0-4v-1h10.962v1zm0-4v-1h10.962v1zM16.442 20v-5.942l4.577 2.98z");
}
</style><path class="qvgtrdz5k"/>`,
		"fallback": "material-symbols-light:playlist-play-outline-sharp",
	});
}

export default Component;
