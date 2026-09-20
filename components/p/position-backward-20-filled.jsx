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
		"content": `<style>.sawbfnbmj {
  fill: currentColor;
  d: path("M2 4.5A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V6H9.5A3.5 3.5 0 0 0 6 9.5V13H4.5A2.5 2.5 0 0 1 2 10.5zM9.5 7A2.5 2.5 0 0 0 7 9.5v6A2.5 2.5 0 0 0 9.5 18h6a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 15.5 7zM8 9.5A1.5 1.5 0 0 1 9.5 8h6A1.5 1.5 0 0 1 17 9.5v6a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 8 15.5z");
}
</style><path class="sawbfnbmj"/>`,
		"fallback": "fluent:position-backward-20-filled",
	});
}

export default Component;
