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
		"content": `<style>.iqijtq66q {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 17L5 7L19 2L19 22ZM1 12L23 12");
}
</style><path class="iqijtq66q"/>`,
		"fallback": "keyline-icons:symmetry-vertical-sharp",
	});
}

export default Component;
