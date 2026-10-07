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
		"content": `<style>.b53rkkbcc {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 6L23 6M5 12L19 12M9 18L15 18");
}
</style><path class="b53rkkbcc"/>`,
		"fallback": "keyline-icons:list-filter-sharp",
	});
}

export default Component;
