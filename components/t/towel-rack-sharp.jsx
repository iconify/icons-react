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
		"content": `<style>.k38l54bvv {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 7H9M20 7H23M9 15H4V5.5C4 4.12 5.119 3 6.5 3M9 15V13V5.5C9 4.12 7.881 3 6.5 3M9 15V17M6.5 3H20V13V17M9 17V21H20V17M9 17H20");
}
</style><path class="k38l54bvv"/>`,
		"fallback": "keyline-icons:towel-rack-sharp",
	});
}

export default Component;
