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
		"content": `<style>.bm_u_25eq {
  fill: currentColor;
  d: path("M10 7H8v4H4v2h4v4h2v-4h4v-2h-4zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3z");
}
</style><path class="bm_u_25eq"/>`,
		"fallback": "ic:outline-exposure-plus-1",
	});
}

export default Component;
