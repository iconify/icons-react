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
		"content": `<style>.xemmwkqtw {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 18C9 19.6569 7.6569 21 6 21C4.3431 21 3 19.6569 3 18C3 16.3431 4.3431 15 6 15C7.6569 15 9 16.3431 9 18ZM9 18L18 18M18 13.3431L18 3M14.7071 6.2929L18 3L21.2929 6.2929M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="xemmwkqtw"/>`,
		"fallback": "keyline-icons:route-off-sharp",
	});
}

export default Component;
