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
		"content": `<style>.qrgs-6b1d {
  fill: currentColor;
  d: path("M12 3C14.0711 3 16 4.9289 16 7C16 9.0711 14.0711 11 12 11C9.9289 11 8 9.0711 8 7C8 4.9289 9.9289 3 12 3ZM11 13L13 13C16.7279 13 20 16.2721 20 20L20 21C20 21.5523 19.5523 22 19 22L5 22C4.4477 22 4 21.5523 4 21L4 20C4 16.2721 7.2721 13 11 13Z");
}
</style><path class="qrgs-6b1d"/>`,
		"fallback": "keyline-icons:user-sharp-fill",
	});
}

export default Component;
