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
		"content": `<style>.xq8ocibnb {
  fill: currentColor;
  d: path("M3 21V3h14l4 4v2.15l-2 1.975v-3.3L16.175 5H5v14h6v2zM5 5v14zm8 18v-3.075l6.575-6.55l3.075 3.05L16.075 23zm7.5-6.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45l-3.05 3.025zm3.525-3.525l-.475-.45l.925.925zM6 10h9V6H6zm6 8h.1l2.9-2.875V15q0-1.25-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18");
}
</style><path class="xq8ocibnb"/>`,
		"fallback": "material-symbols:save-as-outline-sharp",
	});
}

export default Component;
