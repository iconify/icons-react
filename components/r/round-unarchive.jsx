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
		"content": `<style>.zpsqqma-d {
  fill: currentColor;
  d: path("m20.55 5.22l-1.39-1.68A1.51 1.51 0 0 0 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28m-8.2 4.63L17.5 15H14v2h-4v-2H6.5l5.15-5.15c.19-.19.51-.19.7 0M5.12 5l.82-1h12l.93 1z");
}
</style><path class="zpsqqma-d"/>`,
		"fallback": "ic:round-unarchive",
	});
}

export default Component;
