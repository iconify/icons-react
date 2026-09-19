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
		"content": `<style>.gbx506bbh {
  fill: currentColor;
  d: path("M23 3H1v18h22zm-2 16H3v-3h18z");
}
</style><path class="gbx506bbh"/>`,
		"fallback": "ic:sharp-call-to-action",
	});
}

export default Component;
