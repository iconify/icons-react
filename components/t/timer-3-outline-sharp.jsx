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
		"content": `<style>.npw2ncbdv {
  fill: currentColor;
  d: path("M8.885 18.116v-1.231h6v-4.27h-5v-1.23h5v-4.27h-6v-1.23h7.23v5.5L15.5 12l.616.616v5.5z");
}
</style><path class="npw2ncbdv"/>`,
		"fallback": "material-symbols-light:timer-3-outline-sharp",
	});
}

export default Component;
