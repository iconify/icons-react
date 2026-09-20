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
		"content": `<style>.grk5etbjv {
  fill: currentColor;
  d: path("M4 18v-8zm-2 2V4h2l2 4h3L7 4h2l2 4h3l-2-4h2l2 4h3l-2-4h5v3.125L19.125 10H4v8h8v2zm12 1v-3.075l6.575-6.55l3.075 3.05L17.075 21zm7.5-6.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45l-3.05 3.025zm3.525-3.525l-.475-.45l.925.925z");
}
</style><path class="grk5etbjv"/>`,
		"fallback": "material-symbols:movie-edit-outline-sharp",
	});
}

export default Component;
