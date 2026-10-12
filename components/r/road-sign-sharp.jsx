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
		"content": `<style>.iotd-_bjs {
  d: path("m13.06 3.81l5.13 5.13L19.25 10l-1.06 1.06l-5.13 5.13L12 17.25l-1.06-1.06l-5.13-5.13L4.75 10l1.06-1.06l5.13-5.13L12 2.75z");
}

.v9hhmlbli {
  d: path("M10 12.5v-3h4.5M13 7.75l1.75 1.75L13 11.25m-1 6v4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="iotd-_bjs"/><path class="v9hhmlbli"/></g>`,
		"fallback": "iconoven:road-sign-sharp",
	});
}

export default Component;
