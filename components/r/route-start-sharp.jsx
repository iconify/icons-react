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
		"content": `<style>.qvoc8gbpg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 17.5h.01");
}

.r82irb6gc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 17.5h5.5v-12h5.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.zvb-krb3m {
  cx: 6.5px;
  cy: 17.5px;
  r: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ux2u0rbkq"><circle class="zvb-krb3m"/><path class="qvoc8gbpg"/><path class="r82irb6gc"/></g>`,
		"fallback": "iconoven:route-start-sharp",
	});
}

export default Component;
