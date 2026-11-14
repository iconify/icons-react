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
		"content": `<style>.raiwcmtvc {
  d: path("M9.75 13.25L12 11l2.25 2.25M12 8V5.5c0-2 1.75-3 4-3c0 2-1.75 3-4 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z_qdrpshz {
  d: path("M6 8h12l-1.5 9.5h-9Zm-3 9.5h18l-1.5 3h-15Zm9-2.75V11");
}
</style><g class="ulnmmdpxh"><path class="z_qdrpshz"/><path class="raiwcmtvc"/></g>`,
		"fallback": "uix-sharp:watering-bottom",
	});
}

export default Component;
