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
		"content": `<style>.koruhacwk {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M23 12H1M12 2L7.777 8H16.223L12 2ZM12 22L7.777 16H16.223L12 22Z");
}
</style><path class="koruhacwk"/>`,
		"fallback": "keyline-icons:triangles-centerline-horizontal-sharp",
	});
}

export default Component;
