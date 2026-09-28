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
		"content": `<style>.e0itepj9g {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.4 14.4L6 20L6 6M15.1308 10.0872L18 12L16.7605 12.8263M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="e0itepj9g"/>`,
		"fallback": "keyline-icons:play-off-sharp",
	});
}

export default Component;
