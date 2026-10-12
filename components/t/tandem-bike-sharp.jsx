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
		"content": `<style>.a6mp61byg {
  cx: 18.75px;
  cy: 17.25px;
  r: 2.5px;
}

.ando42v5o {
  d: path("m6.12 14.91l1.63-4.41H17l1.12 4.33M7.75 10.5L11 17.25l2-6.75m-5.25 0v-3m-1.25 0H9m4 3v-3m-1.25 0h2.5m2.75 3l-.75-3H18");
}

.u5ucynbzi {
  cx: 5.25px;
  cy: 17.25px;
  r: 2.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ando42v5o"/><circle class="u5ucynbzi"/><circle class="a6mp61byg"/></g>`,
		"fallback": "iconoven:tandem-bike-sharp",
	});
}

export default Component;
