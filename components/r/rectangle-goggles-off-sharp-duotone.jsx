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
		"content": `<style>.aslqjgb8d {
  d: path("M1.707 1.7071L22.293 22.2929");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xun5j73gm {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18.88 19H16C15.696 19 15.409 18.8619 15.219 18.6247L12 14.6008L8.781 18.6247C8.591 18.8619 8.304 19 8 19H2C1.448 19 1 18.5523 1 18V6C1 5.4477 1.448 5 2 5H4.88L18.88 19ZM8.657 5H12H22C22.552 5 23 5.4477 23 6V18C23 18.3641 22.805 18.6828 22.514 18.8576L8.657 5Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="xun5j73gm"/><path class="aslqjgb8d"/></g>`,
		"fallback": "keyline-icons:rectangle-goggles-off-sharp-duotone",
	});
}

export default Component;
