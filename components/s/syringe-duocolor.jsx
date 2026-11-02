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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qbbfq9kyc {
  stroke-opacity: 0.4;
  d: path("m15 9l3-3m-2-2l4 4");
}

.zkvxhjl_n {
  d: path("m13 7l-6 6a1.414 1.414 0 0 0 0 2l2 2a1.414 1.414 0 0 0 2 0l6-6m-5-5l6 6M8 16l-4 4m5-9l4 4");
}
</style><g class="nrj6p8qat"><path class="qbbfq9kyc"/><path class="zkvxhjl_n"/></g>`,
		"fallback": "coolicons:syringe-duocolor",
	});
}

export default Component;
