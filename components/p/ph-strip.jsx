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
		"content": `<style>.gr_b0xyxq {
  d: path("m12.686 2.268l3.759 1.368l-5.131 14.096l-3.759-1.368Zm-2.309 6.343l3.759 1.368m-4.699 1.216l3.758 1.368m-4.699 1.216l3.759 1.369");
}

.tf_s6-bhv {
  d: path("M5 10v9a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19v-9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tf_s6-bhv"/><path class="gr_b0xyxq"/></g>`,
		"fallback": "uix-sharp:ph-strip",
	});
}

export default Component;
