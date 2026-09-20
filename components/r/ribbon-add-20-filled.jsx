import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gae_lnboe {
  fill: currentColor;
  d: path("M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15zm-6 2c0-1.277.435-2.453 1.166-3.387a6 6 0 1 0 4.036 8.879A5.5 5.5 0 0 1 9 5.5M9 15a6.97 6.97 0 0 0 4-1.255V17.5a.5.5 0 0 1-.79.407L9 16l-3.21 1.907A.5.5 0 0 1 5 17.5v-3.755A6.97 6.97 0 0 0 9 15");
}
</style><path class="gae_lnboe"/>`,
		"fallback": "fluent:ribbon-add-20-filled",
	});
}

export default Component;
