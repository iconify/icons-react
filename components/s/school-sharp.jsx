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
		"content": `<style>.ab1300b9n {
  cx: 12px;
  cy: 10.5px;
  r: 1.25px;
}

.frsaaq3rt {
  d: path("M10 21v-6h4v6");
}

.idbp_bcvx {
  d: path("M3 20V10l.87-.49l7.26-4.02L12 5l.87.49l7.26 4.02l.87.49v11H3zm9-15V2.75l3.75 1l-3.75 1");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="idbp_bcvx"/><circle class="ab1300b9n"/><path class="frsaaq3rt"/></g>`,
		"fallback": "iconoven:school-sharp",
	});
}

export default Component;
