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
		"content": `<style>.fm16020hs {
  fill: currentColor;
  d: path("M6.616 9.192h8v-2h-8zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="fm16020hs"/>`,
		"fallback": "material-symbols-light:subheader-outline-sharp",
	});
}

export default Component;
