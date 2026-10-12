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
		"content": `<style>.rbvsij3wx {
  d: path("M16.75 7.5v11.75");
}

.slh4u-ijy {
  d: path("M3.75 7.5h1l.5-1.37l.5-1.38h4.5l.5 1.38l.5 1.37h10v11.75H2.75V7.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zz80vlb7c {
  cx: 9.25px;
  cy: 13.25px;
  r: 3.5px;
}
</style><g class="x2cwu0gfd"><path class="slh4u-ijy"/><circle class="zz80vlb7c"/><path class="rbvsij3wx"/></g>`,
		"fallback": "iconoven:mirrorless-camera-sharp",
	});
}

export default Component;
