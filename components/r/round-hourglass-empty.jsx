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
		"content": `<style>.csqx4cb_n {
  fill: currentColor;
  d: path("M8 2c-1.1 0-2 .9-2 2v3.17c0 .53.21 1.04.59 1.42L10 12l-3.42 3.42c-.37.38-.58.89-.58 1.42V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3.16c0-.53-.21-1.04-.58-1.41L14 12l3.41-3.4c.38-.38.59-.89.59-1.42V4c0-1.1-.9-2-2-2zm8 14.5V19c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-2.5l4-4zm-4-5l-4-4V5c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2.5z");
}
</style><path class="csqx4cb_n"/>`,
		"fallback": "ic:round-hourglass-empty",
	});
}

export default Component;
