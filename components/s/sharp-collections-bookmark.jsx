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
		"content": `<style>.s6ndob61n {
  fill: currentColor;
  d: path("M4 6H2v16h16v-2H4zm18-4H6v16h16zm-2 10l-2.5-1.5L15 12V4h5z");
}
</style><path class="s6ndob61n"/>`,
		"fallback": "ic:sharp-collections-bookmark",
	});
}

export default Component;
