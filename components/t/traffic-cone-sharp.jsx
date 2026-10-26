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
		"content": `<style>.s14tkjyzn {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 22L10 2L14 2L20 22M1 22L23 22M8 8.6667L16 8.6667M6 15.3333L18 15.3333");
}
</style><path class="s14tkjyzn"/>`,
		"fallback": "keyline-icons:traffic-cone-sharp",
	});
}

export default Component;
