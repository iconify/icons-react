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
		"content": `<style>.rr14xwbmu {
  fill: currentColor;
  d: path("M8 13h4v2l3-3l-3-3v2H8V9l-3 3l3 3zm10-3.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13zM16 17H4V7h12z");
}
</style><path class="rr14xwbmu"/>`,
		"fallback": "ic:outline-switch-video",
	});
}

export default Component;
