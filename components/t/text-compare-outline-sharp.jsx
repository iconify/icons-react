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
		"content": `<style>.v66md2bzz {
  fill: currentColor;
  d: path("M10 23v-2H3V3h7V1h2v22zm-5-4h5v-2H7v-2h3v-2H7v-2h3V9H7V7h3V5H5zm9-14V3h7v18h-7v-2h5V5zm0 8v-2h3v2zm0-4V7h3v2zm-4 3");
}
</style><path class="v66md2bzz"/>`,
		"fallback": "material-symbols:text-compare-outline-sharp",
	});
}

export default Component;
