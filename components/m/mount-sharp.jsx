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
		"content": `<style>.jd4n2158y {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 12H4M12 2L5 7.86L19 7.86L12 2ZM12 22L5 16.14L19 16.14L12 22Z");
}
</style><path class="jd4n2158y"/>`,
		"fallback": "keyline-icons:mount-sharp",
	});
}

export default Component;
