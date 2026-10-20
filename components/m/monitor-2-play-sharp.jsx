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
		"content": `<style>.rh5xtvfso {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 3L22 3L22 17L2 17ZM12 17L12 21M7 21L17 21M10 7L14.4267 10L10 13Z");
}
</style><path class="rh5xtvfso"/>`,
		"fallback": "keyline-icons:monitor-2-play-sharp",
	});
}

export default Component;
