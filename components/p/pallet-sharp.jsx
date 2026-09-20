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
		"content": `<style>.d1wl-bcth {
  fill: currentColor;
  d: path("M3.885 19.577v-2h16.23v2h-1.769v-1h-5.461v1h-1.77v-1h-5.46v1zm2.134-4v-12h11.962v12zM9 8.154h6v-1H9z");
}
</style><path class="d1wl-bcth"/>`,
		"fallback": "material-symbols-light:pallet-sharp",
	});
}

export default Component;
