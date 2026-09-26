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
		"content": `<style>.tef0-zbpw {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4L22 4L22 20L2 20L2 4ZM5 10L9 10M11 10L19 10M5 14L13 14M15 14L19 14");
}
</style><path class="tef0-zbpw"/>`,
		"fallback": "keyline-icons:subtitles-sharp",
	});
}

export default Component;
