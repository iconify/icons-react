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
		"content": `<style>.ep2k6ixep {
  d: path("M2.75 21.25H7v-3.5h4.75v-3.5h4.75v-3.5h4.75");
}

.hvwhfobtw {
  d: path("m9 7.25l1.25 3.25m0 0l-.75 7.25m.75-7.25l3.5 1l-.25 2.75m-4-5.75l3 1L14 7.75");
}

.n-vrqob0o {
  cx: 8.75px;
  cy: 4.5px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ep2k6ixep"/><circle class="n-vrqob0o"/><path class="hvwhfobtw"/></g>`,
		"fallback": "iconoven:stair-climber-sharp",
	});
}

export default Component;
