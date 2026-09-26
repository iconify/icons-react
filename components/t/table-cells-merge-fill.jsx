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
		"content": `<style>.jqyjtvb9i {
  fill: currentColor;
  d: path("M3 9H21V15H3V9Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xw2-rqb8f {
  d: path("M6 3H18C19.65685 3 21 4.34315 21 6V18C21 19.65685 19.65685 21 18 21H6C4.34315 21 3 19.65685 3 18V6C3 4.34315 4.34315 3 6 3ZM12 3V9M12 15V21M3 9H21M3 15H21");
}
</style><g class="nrj6p8qat"><path class="jqyjtvb9i"/><path class="xw2-rqb8f"/></g>`,
		"fallback": "keyline-icons:table-cells-merge-fill",
	});
}

export default Component;
