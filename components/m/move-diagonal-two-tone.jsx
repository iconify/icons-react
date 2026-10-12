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
		"content": `<style>.f-a_vfb1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.6 19.4L19.4 4.6M14 4L19.5 4C19.7761 4 20 4.2239 20 4.5L20 10M10 20L4.5 20C4.2239 20 4 19.7761 4 19.5L4 14");
}
</style><path class="f-a_vfb1i"/>`,
		"fallback": "keyline-icons:move-diagonal-two-tone",
	});
}

export default Component;
