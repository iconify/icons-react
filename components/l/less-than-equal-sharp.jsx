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
		"content": `<style>.di0hfkbcc {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.243 4.85L8 10L16.47 15.29M17 19H7");
}
</style><path class="di0hfkbcc"/>`,
		"fallback": "keyline-icons:less-than-equal-sharp",
	});
}

export default Component;
