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

.pv-hghb8k {
  stroke-opacity: 0.4;
  d: path("M8 7h8m-8 4h8m-8 4h4");
}

.qq7f_hbum {
  d: path("M12 3h8v18l-4-2l-4 2l-4-2l-4 2V3z");
}
</style><g class="nrj6p8qat"><path class="pv-hghb8k"/><path class="qq7f_hbum"/></g>`,
		"fallback": "coolicons:receipt-duocolor-sharp",
	});
}

export default Component;
