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
		"content": `<style>.jcj8fcbnb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 12L8 12M4.7071 8.7071L8 12L4.7071 15.2929M11 6L23 6M11 12L23 12M11 18L23 18");
}
</style><path class="jcj8fcbnb"/>`,
		"fallback": "keyline-icons:list-indent-increase-sharp-fill",
	});
}

export default Component;
