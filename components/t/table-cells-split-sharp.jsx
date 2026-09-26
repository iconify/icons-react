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
		"content": `<style>.edyly-bkq {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 21L3 21L3 3ZM12 3L12 21M3 9L21 9M3 15L21 15M7.5 9L7.5 15M16.5 9L16.5 15");
}
</style><path class="edyly-bkq"/>`,
		"fallback": "keyline-icons:table-cells-split-sharp",
	});
}

export default Component;
