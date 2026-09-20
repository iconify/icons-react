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
		"content": `<style>.qk-mwpqsh {
  fill: currentColor;
  d: path("M3 21V3h12l6 6v12zm4-4h10v-2H7zm0-4h10v-2H7zm0-4h7V7H7z");
}
</style><path class="qk-mwpqsh"/>`,
		"fallback": "material-symbols:text-snippet-sharp",
	});
}

export default Component;
