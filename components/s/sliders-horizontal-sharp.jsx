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
		"content": `<style>.n204dep_b {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 5L13 5M22 5L16 5M16 2L16 8M2 12L10 12M22 12L13 12M10 9L10 15M2 19L11 19M22 19L14 19M14 16L14 22");
}
</style><path class="n204dep_b"/>`,
		"fallback": "keyline-icons:sliders-horizontal-sharp",
	});
}

export default Component;
