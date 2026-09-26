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
		"content": `<style>.fubjnnb6d {
  fill: currentColor;
  d: path("M10 18C10 20.0711 8.0711 22 6 22C3.9289 22 2 20.0711 2 18C2 15.9289 3.9289 14 6 14C8.0711 14 10 15.9289 10 18Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nw5pdsbpv {
  d: path("M8 18L18 18L18 3M14.7071 6.2929L18 3L21.2929 6.2929");
}
</style><g class="gp_8x1bzb"><path class="nw5pdsbpv"/><path class="fubjnnb6d"/></g>`,
		"fallback": "keyline-icons:route-sharp-fill",
	});
}

export default Component;
