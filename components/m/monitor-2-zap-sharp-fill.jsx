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
		"content": `<style>.aq337db4j {
  d: path("M12 17L12 21M7 21L17 21M20.2929 2.7071L17 6L21 6L17.7071 9.2929");
}

.gp_8x1bzb {
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
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="kz_2rwb3a"/><path class="aq337db4j"/></g>`,
		"fallback": "keyline-icons:monitor-2-zap-sharp-fill",
	});
}

export default Component;
