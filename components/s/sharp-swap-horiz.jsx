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
		"content": `<style>.vkydyji_p {
  fill: currentColor;
  d: path("M6.99 11L3 15l3.99 4v-3H14v-2H6.99zM21 9l-3.99-4v3H10v2h7.01v3z");
}
</style><path class="vkydyji_p"/>`,
		"fallback": "ic:sharp-swap-horiz",
	});
}

export default Component;
