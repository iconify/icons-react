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
		"content": `<style>.cgnr54kel {
  d: path("M8.5 11h7v5.5h-7zm0 2.75h7");
}

.i9v4e1r8y {
  cx: 5px;
  cy: 6px;
  r: 2.25px;
}

.ispxgzbeo {
  cx: 19px;
  cy: 6px;
  r: 2.25px;
}

.iu6zz442a {
  d: path("M12 21.25V6M6.5 6h11M8 21.25h8");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="iu6zz442a"/><circle class="i9v4e1r8y"/><circle class="ispxgzbeo"/><path class="cgnr54kel"/></g>`,
		"fallback": "iconoven:weather-station-farm-sharp",
	});
}

export default Component;
