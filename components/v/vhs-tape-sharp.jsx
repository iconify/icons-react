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
		"content": `<style>.b9mf971ok {
  d: path("M2.75 5.5h18.5v13H2.75zm4 3h10.5");
}

.rfevj2b_f {
  d: path("M6.25 11.5h11.5v4H6.25zm3.5 2h.01m4.49 0h.01");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="b9mf971ok"/><path class="rfevj2b_f"/></g>`,
		"fallback": "iconoven:vhs-tape-sharp",
	});
}

export default Component;
