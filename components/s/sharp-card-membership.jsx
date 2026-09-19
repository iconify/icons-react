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
		"content": `<style>.i-id84bjr {
  fill: currentColor;
  d: path("M22 2H2v15h6v5l4-2l4 2v-5h6zm-2 13H4v-2h16zm0-5H4V4h16z");
}
</style><path class="i-id84bjr"/>`,
		"fallback": "ic:sharp-card-membership",
	});
}

export default Component;
