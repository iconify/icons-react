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
		"content": `<style>.g-ctu83gc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 2L22 2C22.5523 2 23 2.4477 23 3L23 17C23 17.5523 22.5523 18 22 18L2 18C1.4477 18 1 17.5523 1 17L1 3C1 2.4477 1.4477 2 2 2ZM13 9.4142L14.5858 11L16 9.5858L12.7071 6.2929C12.5196 6.1054 12.2652 6 12 6C11.7348 6 11.4804 6.1054 11.2929 6.2929L8 9.5858L9.4142 11L11 9.4142L11 14L13 14L13 9.4142Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.m77kogrek {
  d: path("M12 17L12 21M7 21L17 21");
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="g-ctu83gc"/><path class="m77kogrek"/></g>`,
		"fallback": "keyline-icons:monitor-2-arrow-up-sharp-fill",
	});
}

export default Component;
