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
		"content": `<style>.an9d5p_aq {
  fill: currentColor;
  d: path("M20 18V5h-.3L15 6.7v1.7l3-1.02V18zm-10-1v-4h4v-2h-4V7H8v4H4v2h4v4z");
}
</style><path class="an9d5p_aq"/>`,
		"fallback": "ic:twotone-exposure-plus-1",
	});
}

export default Component;
