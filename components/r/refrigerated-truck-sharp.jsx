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
		"content": `<style>.hcx90246b {
  d: path("M2.75 4.5h11.5V15H2.75zM8.5 9.75V7.5m0 2.25V12m0-2.25L6.55 8.63M8.5 9.75l1.95 1.13M8.5 9.75l-1.95 1.13M8.5 9.75l1.95-1.12m6.3 5.37V8H19l.6.8l1.05 1.4l.6.8v4h-4.5zm-2.5-.5h2.5");
}

.jksu-ji1z {
  cx: 19px;
  cy: 19.25px;
  r: 1.5px;
}

.tbv1ubc9c {
  cx: 6.5px;
  cy: 19.25px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hcx90246b"/><circle class="tbv1ubc9c"/><circle class="jksu-ji1z"/></g>`,
		"fallback": "iconoven:refrigerated-truck-sharp",
	});
}

export default Component;
