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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.hrwa_z-6s {
  fill: currentColor;
  d: path("M5 4L19 4C20.6569 4 22 5.3431 22 7L12.7071 11C12.2846 11.2817 11.7154 11.2817 11.2929 11L2 7C2 5.3431 3.3432 4 5 4Z");
  stroke: none;
}

.kazr2ettv {
  d: path("M13 20L2 20L2 4L22 4L22 11M2 7L11.2929 11C11.7154 11.2817 12.2846 11.2817 12.7071 11L22 7M15.7071 13.7071L22.2929 20.2929M22.2929 13.7071L15.7071 20.2929");
}
</style><g class="gp_8x1bzb"><path class="hrwa_z-6s"/><path class="kazr2ettv"/></g>`,
		"fallback": "keyline-icons:mail-x-sharp-fill",
	});
}

export default Component;
