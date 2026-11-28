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
		"content": `<style>.bj5_z75gr {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 3L13 3C11.3431 3 10 4.3431 10 6C10 7.6569 11.3431 9 13 9L15 9M15 3L15 14M20 3L20 14M22 17L3 17M7.2929 12.7071L3 17L7.2929 21.2929");
}
</style><path class="bj5_z75gr"/>`,
		"fallback": "keyline-icons:pilcrow-left-sharp",
	});
}

export default Component;
