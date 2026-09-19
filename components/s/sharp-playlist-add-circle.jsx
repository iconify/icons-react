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
		"content": `<style>.zbb_vgm6i {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M7 7h7v2H7zm3 8H7v-2h3zm-3-3v-2h7v2zm12 3h-2v2h-2v-2h-2v-2h2v-2h2v2h2z");
}
</style><path class="zbb_vgm6i"/>`,
		"fallback": "ic:sharp-playlist-add-circle",
	});
}

export default Component;
