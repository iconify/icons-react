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
		"content": `<style>.pd2jcrbpn {
  fill: currentColor;
  d: path("M7 20v-1h4.5v-3H3V4h18v12h-8.5v3H17v1z");
}
</style><path class="pd2jcrbpn"/>`,
		"fallback": "material-symbols-light:jamboard-kiosk-sharp",
	});
}

export default Component;
