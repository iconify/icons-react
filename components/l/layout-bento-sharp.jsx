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
		"content": `<style>.q12mu5ejy {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L3 10L12 10L12 3L3 3ZM16 3L16 10L21 10L21 3L16 3ZM3 14L3 21L8 21L8 14L3 14ZM12 14L12 21L21 21L21 14L12 14Z");
}
</style><path class="q12mu5ejy"/>`,
		"fallback": "keyline-icons:layout-bento-sharp",
	});
}

export default Component;
