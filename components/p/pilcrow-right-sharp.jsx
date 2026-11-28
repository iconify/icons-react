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
		"content": `<style>.n-kq72b3i {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 3L6 3C4.3431 3 3 4.3431 3 6C3 7.6569 4.3431 9 6 9L8 9M8 3L8 14M13 3L13 14M2 17L21 17M16.7071 12.7071L21 17L16.7071 21.2929");
}
</style><path class="n-kq72b3i"/>`,
		"fallback": "keyline-icons:pilcrow-right-sharp",
	});
}

export default Component;
