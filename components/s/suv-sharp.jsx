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
		"content": `<style>.arai4bb0q {
  d: path("M2.75 15v-4.475l1.2-.245l1.8-.36l1.8-3.06l.529-1.067L9.27 5.75H19.8l.42 1.44l.95 3.26l.08.274V16H2.75zm3-4.75h15.5m-8-4.5v4.5");
}

.bhnvrvjtt {
  cx: 17px;
  cy: 16px;
  r: 2.5px;
}

.uxwtxcbyr {
  cx: 7px;
  cy: 16px;
  r: 2.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="arai4bb0q"/><circle class="uxwtxcbyr"/><circle class="bhnvrvjtt"/></g>`,
		"fallback": "iconoven:suv-sharp",
	});
}

export default Component;
