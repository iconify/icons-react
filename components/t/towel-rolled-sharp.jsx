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
		"content": `<style>.ng7y6b4ns {
  cx: 8px;
  cy: 12px;
  r: 5.25px;
}

.uutkm9wab {
  d: path("M8 6.75h13.25v10.5H8a5.25 5.25 0 0 0 0-10.5Zm8.5 0v10.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yg_clqbut {
  d: path("M10.25 12A2.25 2.25 0 1 1 8 9.75");
}
</style><g class="x2cwu0gfd"><path class="uutkm9wab"/><circle class="ng7y6b4ns"/><path class="yg_clqbut"/></g>`,
		"fallback": "iconoven:towel-rolled-sharp",
	});
}

export default Component;
