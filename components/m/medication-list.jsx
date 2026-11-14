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
		"content": `<style>.ij_tnfben {
  d: path("M15.5 16h5v5.75h-5Z");
}

.l-8_qo57v {
  d: path("M12.7 19H3V2.5h13v8.7M6 7h7m-7 3.5h7M6 14h4.5m4.5 0h6v2h-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l-8_qo57v"/><path class="ij_tnfben"/></g>`,
		"fallback": "uix-sharp:medication-list",
	});
}

export default Component;
