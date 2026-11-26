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

.kz_2rwb3a {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M23 12L23 17C23 17.5523 22.5523 18 22 18L2 18C1.4477 18 1 17.5523 1 17L1 3C1 2.4477 1.4477 2 2 2L13 2L13 12Z");
  stroke: none;
}

.zes63cj-a {
  d: path("M12 17L12 21M7 21L17 21M22 2L22 7L16 7M18.2929 4.7071L16 7L18.2929 9.2929");
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="kz_2rwb3a"/><path class="zes63cj-a"/></g>`,
		"fallback": "keyline-icons:monitor-2-return-sharp-fill",
	});
}

export default Component;
