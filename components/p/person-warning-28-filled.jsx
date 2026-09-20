import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u8fmezbkp {
  fill: currentColor;
  d: path("M13.27 24.367a2.5 2.5 0 0 0-.222 1.61C7.755 25.71 4 23.226 4 19.714V19a3 3 0 0 1 3-3h10.46zM14 2a6 6 0 1 1 0 12a6 6 0 0 1 0-12m5.164 12.828l-5.002 9.992c-.501 1 .222 2.18 1.336 2.18h10.004c1.114 0 1.837-1.18 1.336-2.18l-5.002-9.992c-.552-1.104-2.12-1.104-2.672 0M21 17.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 1 0m-.5 7.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1");
}
</style><path class="u8fmezbkp"/>`,
		"fallback": "fluent:person-warning-28-filled",
	});
}

export default Component;
