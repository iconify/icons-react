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
		"content": `<style>.oqqp40bai {
  d: path("M12 6C9.5 4 6 4 2.5 5v14c3.5-1 7-1 9.5 1c2.5-2 6-2 9.5-1V5c-3.5-1-7-1-9.5 1Zm0 0v14");
}

.r_fkeob1p {
  d: path("M14.75 15.5L17 12l2.25 3.5M18 8.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oqqp40bai"/><path class="r_fkeob1p"/></g>`,
		"fallback": "uix-sharp:photo-book",
	});
}

export default Component;
