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
		"content": `<style>.ozds9hbhx {
  fill: currentColor;
  d: path("M3 5h18v11H3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.q_z4mab9x {
  fill: currentColor;
  d: path("M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 13H3V5h18z");
}
</style><path class="ozds9hbhx"/><path class="q_z4mab9x"/>`,
		"fallback": "ic:twotone-video-label",
	});
}

export default Component;
