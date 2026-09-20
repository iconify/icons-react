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
		"content": `<style>.dnnlxs4un {
  fill: currentColor;
  d: path("M10 23v-2H3V3h7V1h2v22zm4-18V3h7v18h-7v-2h5V5zm0 8v-2h3v2zm0-4V7h3v2zm-7 8h3v-2H7zm0-4h3v-2H7zm0-4h3V7H7z");
}
</style><path class="dnnlxs4un"/>`,
		"fallback": "material-symbols:text-compare-sharp",
	});
}

export default Component;
