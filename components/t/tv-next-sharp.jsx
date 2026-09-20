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
		"content": `<style>.xq7-6gbbh {
  fill: currentColor;
  d: path("m19.5 21.73l-.73-.73l3-3l-3-3l.73-.73L23.23 18zM9 20v-2H3V4h18v8h-4v6h-2.23v2z");
}
</style><path class="xq7-6gbbh"/>`,
		"fallback": "material-symbols-light:tv-next-sharp",
	});
}

export default Component;
