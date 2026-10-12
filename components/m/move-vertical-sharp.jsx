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
		"content": `<style>.dnggm9bcb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21L12 3M7.7071 7.2929L12 3L16.2929 7.2929M7.7071 16.7071L12 21L16.2929 16.7071");
}
</style><path class="dnggm9bcb"/>`,
		"fallback": "keyline-icons:move-vertical-sharp",
	});
}

export default Component;
