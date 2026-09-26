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
		"content": `<style>.p9nkwub_c {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 4L9 4L9 20L5 20L5 4ZM15 4L19 4L19 20L15 20L15 4Z");
}
</style><path class="p9nkwub_c"/>`,
		"fallback": "keyline-icons:pause-sharp-duotone",
	});
}

export default Component;
