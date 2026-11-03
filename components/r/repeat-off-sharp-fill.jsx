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
		"content": `<style>.k4qx48fws {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 13L3 6L6 6M18 18L3 18M6.2929 21.2929L3 18L6.2929 14.7071M10.6569 6L21 6M17.7071 2.7071L21 6L17.7071 9.2929M21 11L21 16.3431M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="k4qx48fws"/>`,
		"fallback": "keyline-icons:repeat-off-sharp-fill",
	});
}

export default Component;
