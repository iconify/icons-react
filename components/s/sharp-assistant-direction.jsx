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
		"content": `<style>.dr4jem6sl {
  fill: currentColor;
  d: path("M13.5 10H8v5h2v-3h3.5v2.5L17 11l-3.5-3.5zM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11s11-4.9 11-11S18.1 1 12 1m8.31 11l-8.34 8.37L3.62 12l8.34-8.37z");
}
</style><path class="dr4jem6sl"/>`,
		"fallback": "ic:sharp-assistant-direction",
	});
}

export default Component;
