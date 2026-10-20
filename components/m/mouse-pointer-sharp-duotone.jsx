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
		"content": `<style>.vz3pr3bvt {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 9.2011L15.008 12.1796L21 18.5858L18.5858 21L12.2249 15.0533L8.9427 21Z");
}
</style><path class="vz3pr3bvt"/>`,
		"fallback": "keyline-icons:mouse-pointer-sharp-duotone",
	});
}

export default Component;
