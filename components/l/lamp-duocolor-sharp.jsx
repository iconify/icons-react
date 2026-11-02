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
		"content": `<style>.nno0zcbor {
  d: path("M9 3h6l4 8H5z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qk7x1cc5y {
  stroke-opacity: 0.4;
  d: path("M12 11v6m-4 0h8v4H8Z");
}
</style><g class="nrj6p8qat"><path class="qk7x1cc5y"/><path class="nno0zcbor"/></g>`,
		"fallback": "coolicons:lamp-duocolor-sharp",
	});
}

export default Component;
