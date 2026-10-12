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
		"content": `<style>.aacqtmbqq {
  d: path("M13.5 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-4.75 7.25h12.5v7.5H8.75z");
}

.gilxcj5fr {
  d: path("m15 15.75l1.75 3h-3.5ZM4.75 4.5v14m-2-2l2 2l2-2");
}

.lstelzb1n {
  d: path("M8.75 2.75h12.5v7.5H8.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="lstelzb1n"/><path class="aacqtmbqq"/><path class="gilxcj5fr"/></g>`,
		"fallback": "iconoven:visual-schedule-sharp",
	});
}

export default Component;
