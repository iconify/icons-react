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
		"content": `<style>.npnnymbeu {
  fill: currentColor;
  d: path("M4 20V4h6.616v1H5v14h14v-5.615h1V20zm12-9V8h-3V7h3V4h1v3h3v1h-3v3z");
}
</style><path class="npnnymbeu"/>`,
		"fallback": "material-symbols-light:new-window-sharp",
	});
}

export default Component;
