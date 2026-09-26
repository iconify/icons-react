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
		"content": `<style>.ckex8b9yy {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2.0001 10L21.9999 10L19 21L5 21L2.0001 10ZM9 10L10 3L16 3L15 10");
}
</style><path class="ckex8b9yy"/>`,
		"fallback": "keyline-icons:shopping-basket-sharp",
	});
}

export default Component;
