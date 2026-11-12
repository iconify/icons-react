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
		"content": `<style>.e8jqvvkfv {
  d: path("M21 9.3C20.9424 6.78787 20.702 5.32056 19.6974 4.31802C18.3768 3 16.2512 3 12 3C7.74882 3 5.62323 3 4.30256 4.31802C3.298 5.32056 3.05755 6.78787 3 9.3M21 14.7C20.9424 17.2121 20.702 18.6794 19.6974 19.682C18.3768 21 16.2512 21 12 21C7.74882 21 5.62323 21 4.30256 19.682C3.29801 18.6794 3.05756 17.2121 3 14.7");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.erf8l4xce {
  d: path("M22 12H20");
}

.fbyc4_bzy {
  d: path("M12 16L12 8");
}

.hf617yxtt {
  d: path("M4 12H2");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lhx-r4bhy {
  d: path("M8 8H16");
}
</style><g class="ipq1z-bjh"><path class="e8jqvvkfv"/><path class="lhx-r4bhy"/><path class="fbyc4_bzy"/><path class="erf8l4xce"/><path class="hf617yxtt"/></g>`,
		"fallback": "solar:text-square-2-line-duotone",
	});
}

export default Component;
