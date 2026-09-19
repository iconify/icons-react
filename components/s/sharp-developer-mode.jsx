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
		"content": `<style>.c83cblb0v {
  fill: currentColor;
  d: path("M7 5h10v2h2V1.01L5 1v6h2zm8.41 11.59L20 12l-4.59-4.59L14 8.83L17.17 12L14 15.17zM10 15.17L6.83 12L10 8.83L8.59 7.41L4 12l4.59 4.59zM17 19H7v-2H5v6h14v-6h-2z");
}
</style><path class="c83cblb0v"/>`,
		"fallback": "ic:sharp-developer-mode",
	});
}

export default Component;
