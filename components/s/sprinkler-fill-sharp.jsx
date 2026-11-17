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
		"content": `<style>.h5a6nkb5n {
  fill: currentColor;
  d: path("M9 3h.01a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2M5 6h.01a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m14 0h.01a1 1 0 0 1 0 2H19a1 1 0 0 1 0-2m-7 1h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2M8 9h.01a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m8 0h.01a1 1 0 0 1 0 2H16a1 1 0 0 1 0-2m-3 6.829V19h3a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h3v-3.171a3 3 0 1 1 2 0");
}
</style><path class="h5a6nkb5n"/>`,
		"fallback": "coolicons:sprinkler-fill-sharp",
	});
}

export default Component;
