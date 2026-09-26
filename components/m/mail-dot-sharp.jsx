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
		"content": `<style>.gm1jblb7i {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 20L2 20L2 4L22 4L22 11M2 7L11.2929 11C11.7154 11.2817 12.2846 11.2817 12.7071 11L22 7M19 14C20.6568 14 22 15.3431 22 17C22 18.6568 20.6568 20 19 20C17.3432 20 16 18.6568 16 17C16 15.3431 17.3432 14 19 14Z");
}
</style><path class="gm1jblb7i"/>`,
		"fallback": "keyline-icons:mail-dot-sharp",
	});
}

export default Component;
