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
		"content": `<style>.byzo82b4o {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 20L2 20L2 4L4 4M8.6569 4L22 4L22 17.3431M5 10L10 10M5 14L14 14M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="byzo82b4o"/>`,
		"fallback": "keyline-icons:subtitles-off-sharp",
	});
}

export default Component;
