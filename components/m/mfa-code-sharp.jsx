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
		"content": `<style>.q3o4fac6a {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h10.5v18.5H2.75zm4 2.75h2.5M6.75 18h2.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.wb1bcbceu {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.25 12h.01m2.62 0h.01m2.61 0h.01");
}

.x5w6d0kuu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 8.75h10.75v6.5H10.5z");
}
</style><g class="ux2u0rbkq"><path class="q3o4fac6a"/><path class="x5w6d0kuu"/><path class="wb1bcbceu"/></g>`,
		"fallback": "iconoven:mfa-code-sharp",
	});
}

export default Component;
