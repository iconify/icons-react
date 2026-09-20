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
		"content": `<style>.t66ot6vba {
  fill: currentColor;
  d: path("M11.5 14.5h1v-3h3v-1h-3v-3h-1v3h-3v1h3zm8 7.23l-.73-.73l3-3l-3-3l.73-.73L23.23 18zM9 20v-2H3V4h18v8h-4v6h-2.23v2z");
}
</style><path class="t66ot6vba"/>`,
		"fallback": "material-symbols-light:queue-play-next-sharp",
	});
}

export default Component;
