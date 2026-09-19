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
		"content": `<style>.scvxqdbhp {
  fill: currentColor;
  d: path("M11 17h2v-1h2v-5h-4v-1h4V8h-2V7h-2v1H9v5h4v1H9v2h2zM22 4H2.01L2 20h20zm-2 14H4V6h16z");
}
</style><path class="scvxqdbhp"/>`,
		"fallback": "ic:sharp-local-atm",
	});
}

export default Component;
