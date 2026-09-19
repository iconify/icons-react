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
		"content": `<style>.pumg_ybch {
  fill: currentColor;
  d: path("M2 4v16h20V4zm10 6H8v1h4v5h-2v1H8v-1H6v-2h4v-1H6V8h2V7h2v1h2zm4 6.25l-2-2h4zM14 10l2-2l2 2z");
}
</style><path class="pumg_ybch"/>`,
		"fallback": "ic:sharp-price-change",
	});
}

export default Component;
